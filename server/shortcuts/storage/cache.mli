module type Cache = sig
  val drop_shortcuts : unit -> unit
  val drop_generic : unit -> unit
  val add_shortcut : Model.Shortcut_t.t -> unit
  val shortcut_of_id : string -> Model.Shortcut_j.t option
  val add_shortcuts : int * int -> Model.Shortcut_t.t list -> unit
  val shortcuts_of_page : int * int -> Model.Shortcut_t.t list option
end

module Make: Cache
