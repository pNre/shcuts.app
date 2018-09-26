type t = {
  id: string;
  name: string;
  description: string;
  plist: string;
}

let from_record_with_plist (record: Shortcut_record.t) plist =
  {id = record.id; name = record.name; description = ""; plist = plist}
