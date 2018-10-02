open Async
open Async_extra
open Async_unix
open Core
open Cohttp_async

let serve_local_file ~docroot ~uri = 
  Cohttp_async.Server.resolve_local_file ~docroot ~uri
  |> Cohttp_async.Server.respond_with_file ~error_body:Shared.Server.not_found_body

let is_static_resource filename =
  let exts = ["js"; "css"; "png"; "jpg"] in
  match Filename.split_extension filename with
  | (_, Some ext) -> List.exists exts ~f:(fun x -> x = ext)
  | _ -> false

let dispatch ~docroot ~body:body address req =
  let uri = Cohttp.Request.uri req in
  let path = Uri.path uri in
  let parts = Filename.parts path in
  Log.Global.debug "Dispatching %s" (String.concat ?sep:(Some ", ") parts);
  match parts with
  | "/" :: "shortcuts" :: _ -> 
    Dispatcher.dispatch ~body:body address req
  | "/" :: [filename] when is_static_resource filename ->
    serve_local_file ~docroot ~uri:uri
  | _ ->
    serve_local_file ~docroot ~uri:(Uri.with_path uri "/index.html")

let log_handler_error _address exn =
  Log.Global.error "Error %s" (Exn.to_string exn)

let main docroot port () =
  Server.create ~on_handler_error:(`Call log_handler_error) (Tcp.Where_to_listen.of_port port) (dispatch ~docroot:docroot)
  >>= fun _ -> Deferred.never ()

let () =
  Async_extra.Command.async_spec
    ~summary:"Start the server"
    Command.Spec.(
      empty
      +> anon (maybe_with_default "." ("docroot" %: string))
      +> flag "-p" (optional_with_default 8080 int) ~doc:"port to listen on"
    )
    main
  |> Command.run
