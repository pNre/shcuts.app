open Cohttp_async

let not_found_body =
  "Not found"

let respond_with_not_found =
  Server.respond_string ~status:`Not_found not_found_body
