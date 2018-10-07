open Async
open Core
open Cohttp_async

let log_view (shortcut: Model.Shortcut_j.t) =
  let should_persist_update (shortcut: Model.Shortcut_j.t) = Int64.(equal (rem shortcut.views (of_int 20)) zero) in
  let updated = Int64.{shortcut with views = shortcut.views + Int64.one} in
  let update = Storage.Main.update_shortcut updated should_persist_update >>| fun _ -> () in
  Deferred.don't_wait_for update;
  updated

let download_shortcut remote_address id =
  try_with (fun () ->
    let%bind record = Provider.Icloud_shortcut.info ~id in
    let%bind shortcut = Provider.Icloud_shortcut.shortcut_of_record ~record:record in
    let s = {shortcut with owners_address = Some remote_address} in
    let insert = Storage.Main.add_shortcut s >>| fun _ -> () in
    Deferred.don't_wait_for insert;
    Deferred.return (Some s))

let find_shortcut remote_address id =
  Storage.Main.shortcut_of_id id
  >>= (function
    | Ok (Some r) -> Deferred.return (Ok (Some r))
    | _ -> download_shortcut remote_address id)
  >>= function
    | Ok (Some shortcut) -> 
      shortcut
      |> log_view
      |> Model.Shortcut.prepare_for_response
      |> Model.Shortcut_j.string_of_t
      |> Shared.Server.respond_with_json_string
    | Ok None ->
      Shared.Server.respond_with_not_found
    | Error e -> 
      let message = Exn.to_string e in
      Shared.Server.respond_with_internal_server_error ~message

let list_shortcuts uri =
  let page = Uri.get_query_param uri "o" 
    |> Option.value_map ~default:None ~f:int_of_string_opt 
    |> Option.value ~default:0 in
  Storage.Main.shortcuts_of_page (page, 32)
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
  | [_; "/"] | ["/"; _] -> list_shortcuts uri
  | id :: "s" :: _ -> find_shortcut remote_address id
  | _ -> Shared.Server.respond_with_not_found
