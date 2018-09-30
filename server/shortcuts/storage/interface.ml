module type S = sig
  type error

  val drop :
    unit -> (unit, error) result Async.Deferred.t

  val create : 
    unit -> (unit, error) result Async.Deferred.t
  
  val add_shortcut :
    Model.Shortcut_j.t -> (unit, error) result Async.Deferred.t
  
  val shortcuts_of_page :
    int * int -> (Model.Shortcut_j.t list, error) result Async.Deferred.t

  val shortcut_of_id :
    string -> (Model.Shortcut_j.t, error) result Async.Deferred.t

  val string_of_error :
    error -> string
end
