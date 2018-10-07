module type Cache = sig
  include Interface.S with type error := unit and type 'a t := 'a
  val drop_shortcuts : unit -> unit
  val drop_pages : unit -> unit
  val add_shortcuts : int * int -> Model.Shortcut_t.t list -> Model.Shortcut_t.t list
end

module Make: Cache
