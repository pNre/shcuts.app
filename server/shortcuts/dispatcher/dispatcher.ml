open Async
open Core
open Cohttp_async

let download_shortcut remote_address id =
  try_with (fun () ->
    Provider.Icloud_shortcut.info ~id
    >>= (fun r -> Provider.Icloud_shortcut.shortcut_of_record ~record:r)
    >>= (fun shortcut ->
      let s = {shortcut with owners_address = Some remote_address} in
      let insert = Storage.Main.add_shortcut s >>| fun _ -> () in
      Deferred.don't_wait_for insert;
      Deferred.return s))

let find_shortcut remote_address id =
  Storage.Main.shortcut_of_id id
  >>= (function
    | Ok r -> Deferred.return (Ok r)
    | Error _ -> download_shortcut remote_address id)
  >>= function
    | Ok shortcut -> 
      shortcut
      |> Model.Shortcut.prepare_for_response
      |> Model.Shortcut_j.string_of_t
      |> Shared.Server.respond_with_json_string
    | Error e -> 
      let message = Exn.to_string e in
      Shared.Server.respond_with_internal_server_error ~message

let list_shortcuts () =
  Storage.Main.shortcuts_of_page (0, 20)
  >>= function
  | Ok shortcuts -> 
    shortcuts
    |> List.map ~f:Model.Shortcut.prepare_for_response
    |> Model.Shortcut_j.string_of_t_list
    |> Shared.Server.respond_with_json_string
  | Error e -> 
    let message = Storage.Main.string_of_error e in
    Shared.Server.respond_with_internal_server_error ~message

let dispatch ~body:_body address req =
  let remote_address = Async_unix.Socket.Address.to_string address in
  let uri = Request.uri req in
  let path = Uri.path uri in
  let parts = Filename.parts path in
  match List.rev parts with
  | [_; "/"] | ["/"; _] -> list_shortcuts ()
  | id :: "s" :: _ -> find_shortcut remote_address id
  | _ -> Shared.Server.respond_with_not_found
