open Async
open Core
open Cohttp_async

let download_shortcut id =
  try_with (fun () ->
    Provider.Icloud_shortcut.info ~id
    >>= (fun r ->
      Provider.Icloud_shortcut.plist ~record:r
      >>| fun plist -> (r, plist))
    >>= (fun (r, plist) ->
      let s = Model.Shortcut.from_record_with_plist r plist in
      let insert = Storage.Main.add_shortcut s >>| fun _ -> () in
      Deferred.don't_wait_for insert;
      Deferred.return plist))
  >>= function
  | Ok plist -> Server.respond_string plist
  | Error _ -> Shared.respond_with_not_found

let fetch_shortcut id =
  Storage.Main.shortcut_of_id id
  >>= function
  | Ok shortcut -> Server.respond_string shortcut.plist
  | Error _ -> download_shortcut id

let dispatch ~body:_body _sock req =
  let uri = Request.uri req in
  let path = Uri.path uri in
  let parts = Filename.parts path in 
  match List.rev parts with
  | id :: "fetch" :: _ -> fetch_shortcut id
  | _ -> Shared.respond_with_not_found
