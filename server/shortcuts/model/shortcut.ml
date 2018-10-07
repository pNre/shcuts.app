let from_record (record: Shortcut_record.t) color plist views =
  Shortcut_j.{id = record.id; name = record.name; description = record.description; color; plist; owners_address = None; views}

let prepare_for_response (record: Shortcut_j.t) =
  {record with owners_address = None}
