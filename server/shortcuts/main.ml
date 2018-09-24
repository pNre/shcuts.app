open Async
open Core
open Async_extra
open Async_unix

let dispatch ~body:body sock req =
  let uri = Cohttp.Request.uri req in
  let path = Uri.path uri in
  let parts = Filename.parts path in
  Log.Global.info "Dispatching %s" (String.concat ?sep:(Some ", ") parts);
  match parts with
  | "/" :: _ -> 
    Server.dispatch ~body:body sock req
  | _ -> Cohttp_async.Server.respond_string ~status:`Not_found "Route not found"

let main =
  Cohttp_async.Server.create ~on_handler_error:`Raise (Tcp.Where_to_listen.of_port 1234) dispatch
  >>= fun _ -> Deferred.never ()

let () =
  Command.async_spec
    ~summary:"Start the server"
    Command.Spec.(empty)
    (fun () -> main)
  |> Command.run
