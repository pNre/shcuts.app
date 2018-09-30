open Cohttp_async

let not_found_body =
  "Not found"

let respond_with_not_found =
  Server.respond_string ~status:`Not_found not_found_body

let respond_with_internal_server_error ~message =
  let body = "Internal server error: " ^ message in
  Server.respond_string ~status:`Internal_server_error body

let respond_with_json_string s =
  let headers = Cohttp.Header.of_list ["Content-Type", "text/json"] in
  Server.respond_string ~headers:headers s