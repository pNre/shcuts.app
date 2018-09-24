open Async
open Async_extra
open Async_unix
open Core
open Cohttp_async

let serve_local_file ~docroot ~uri = 
  Cohttp_async.Server.resolve_local_file ~docroot ~uri
  |> Cohttp_async.Server.respond_with_file

let dispatch ~docroot ~body:body sock req =
  let uri = Cohttp.Request.uri req in
  let path = Uri.path uri in
  let parts = Filename.parts path in
  Log.Global.info "Dispatching %s" (String.concat ?sep:(Some ", ") parts);
  match parts with
  | "/" :: "shortcuts" :: _ -> 
    Dispatcher.dispatch ~body:body sock req
  | "/" :: [filename] when let (_, ext) = Filename.split_extension filename in ext = Some "js" ->
    serve_local_file ~docroot ~uri:uri
  | _ ->
    serve_local_file ~docroot ~uri:(Uri.with_path uri "/index.html")

let main docroot () =
  Server.create ~on_handler_error:`Raise (Tcp.Where_to_listen.of_port 1234) (dispatch ~docroot:docroot)
  >>= fun _ -> Deferred.never ()

let () =
  Async_extra.Command.async_spec
    ~summary:"Start the server"
    Command.Spec.(
      empty
      +> anon (maybe_with_default "." ("docroot" %: string))
    )
    main
  |> Command.run
