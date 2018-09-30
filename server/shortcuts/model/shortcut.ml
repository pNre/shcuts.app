let from_record (record: Shortcut_record.t) color plist =
  Shortcut_j.{id = record.id; name = record.name; description = None; color = color; plist = plist; owners_address = None}

let prepare_for_response (record: Shortcut_j.t) =
  {record with owners_address = None}
