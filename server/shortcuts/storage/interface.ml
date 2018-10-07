module type S = sig
  type error
  val string_of_error : error -> string

  type 'a t
  val create : unit -> unit t
  val drop : unit -> unit t
  val add_shortcut : Model.Shortcut_j.t -> Model.Shortcut_j.t t
  val shortcuts_of_page : int * int -> Model.Shortcut_j.t list t
  val shortcut_of_id : string -> Model.Shortcut_j.t option t
end
