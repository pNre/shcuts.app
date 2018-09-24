open Async
open Core
open Cohttp_async
open Yojson

external binary_plist_to_xml: Bytes.t -> string option = "binary_plist_to_xml"

let route_not_found =
  Server.respond_string ~status:`Not_found "Route not found"

let download_shortcut url =
  Client.get url
  >>= (fun (_, body) -> Body.to_string body)
  >>| Bytes.of_string
  >>| binary_plist_to_xml
  >>| (fun xml -> Option.value_exn xml)
  >>= Server.respond_string

let fetch_shortcut id =
  let record_uri = Uri.of_string ("https://www.icloud.com/shortcuts/api/records/" ^ id) in
  Client.get record_uri
  >>= (fun (_, body) -> Body.to_string body)
  >>= (fun body ->
    try_with (fun () ->
      let json = Basic.from_string body in
      let download_url = json
        |> Basic.Util.member "fields"
        |> Basic.Util.member "shortcut"
        |> Basic.Util.member "value"
        |> Basic.Util.member "downloadURL"
        |> Basic.Util.to_string
        |> Uri.of_string in
      download_shortcut download_url))
  >>= function
  | Ok r -> Deferred.return r
  | Error _ -> route_not_found

let dispatch ~body:_body _sock req =
  let uri = Request.uri req in
  let path = Uri.path uri in
  let parts = Filename.parts path in 
  match List.rev parts with
  | id :: "fetch" :: _ -> fetch_shortcut id
  | _ -> route_not_found
