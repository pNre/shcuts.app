open Async
open Core
open Cohttp_async
open Yojson

external binary_plist_to_xml: Bytes.t -> string option = "binary_plist_to_xml"
external plist_path_to_int: Bytes.t -> string list -> int64 option = "plist_path_to_int"

let format_color value =
  value
  |> Stdint.Uint32.of_int64
  |> Stdint.Uint32.to_string_hex
  |> (fun s -> match String.chop_prefix s ~prefix:"0x" with
    | None -> s
    | Some chopped -> chopped)
  |> (fun s -> 
    let suffix = String.prefix s 8 in
    let prefix = String.make (8 - (String.length suffix)) '0' in
    prefix ^ suffix)

let shortcut_of_record ~record =
  let%bind (_, raw_body) = Client.get record.Model.Shortcut_record.url in
  let%bind body = Body.to_string raw_body in
  body
  |> Bytes.of_string
  |> binary_plist_to_xml
  |> fun x -> Option.value_exn x
  |> (fun plist ->
    let color = ["WFWorkflowIcon"; "WFWorkflowIconStartColor"]
    |> plist_path_to_int (Bytes.of_string plist)
    |> Option.map ~f:format_color in
    Model.Shortcut.from_record record color (Some plist) Int64.zero)
  |> Deferred.return

let info ~id = 
  let record_uri = Uri.of_string ("https://www.icloud.com/shortcuts/api/records/" ^ id) in
  let%bind (_, raw_body) = Client.get record_uri in
  let%bind body = Body.to_string raw_body in
  let json = Basic.from_string body in
  let fields = Basic.Util.member "fields" json in
  let download_url = fields
    |> Basic.Util.member "shortcut"
    |> Basic.Util.member "value"
    |> Basic.Util.member "downloadURL"
    |> Basic.Util.to_string
    |> Uri.of_string in
  let name = fields
    |> Basic.Util.member "name"
    |> Basic.Util.member "value"
    |> Basic.Util.to_string in
  let description = 
    match Basic.Util.member "longDescription" fields with
    | `Null -> None
    | member ->  Basic.Util.to_string_option (Basic.Util.member "value" member)  in
  Deferred.return Model.Shortcut_record.{id; name; description; url = download_url}
