module type S = sig
  type error

  val drop :
    unit -> (unit, error) result Async.Deferred.t

  val create : 
    unit -> (unit, error) result Async.Deferred.t
  
  val add_shortcut :
    Model.Shortcut.t -> (unit, error) result Async.Deferred.t
  
  val shortcut_of_id :
    string -> (Model.Shortcut.t, error) result Async.Deferred.t

  val string_of_error :
    error -> string
end
