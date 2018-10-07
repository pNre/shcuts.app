module type MainStorage = sig
  include Interface.S with type error := Storage_error.t and type 'a t := ('a, Storage_error.t) result Async.Deferred.t
  val clear_cache : unit -> unit
  val update_shortcut : Model.Shortcut_j.t -> (Model.Shortcut_j.t -> bool) -> (Model.Shortcut_j.t, Storage_error.t) result Async.Deferred.t
end

module Main: MainStorage
