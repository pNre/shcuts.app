val info: id:string -> Model.Shortcut_record.t Async.Deferred.t
val shortcut_of_record: record:Model.Shortcut_record.t -> Model.Shortcut_t.t Async.Deferred.t
val format_color: int64 -> string
