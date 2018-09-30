val not_found_body: string
val respond_with_not_found: Cohttp_async.Server.response Async.Deferred.t
val respond_with_internal_server_error: message:string -> Cohttp_async.Server.response Async.Deferred.t
val respond_with_json_string: string -> Cohttp_async.Server.response Async.Deferred.t
