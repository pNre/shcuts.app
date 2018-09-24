open Core
open Cohttp_async
let route_not_found =
  Server.respond_string ~status:`Not_found "Route not found"

let dispatch ~body:_body _sock req =
  let uri = Request.uri req in
  let path = Uri.path uri in
  let _query = Uri.query uri in
  let parts = Filename.parts path in 
  match List.rev parts with
  | _ -> route_not_found
