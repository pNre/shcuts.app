module type Cache = sig
  val drop_shortcuts : unit -> unit
  val drop_generic : unit -> unit
  val add_shortcut : Model.Shortcut_t.t -> unit
  val shortcut_of_id : string -> Model.Shortcut_j.t option
  val add_shortcuts : int * int -> Model.Shortcut_t.t list -> unit
  val shortcuts_of_page : int * int -> Model.Shortcut_t.t list option
end

module Make: Cache = struct
  open Async
  open Core_extended

  let shortcut_cache = Cache.Lru.create ~destruct:None 256
  let generic_cache = Cache.Lru.create ~destruct:None 16

  let drop_shortcuts () =
    Cache.Lru.clear shortcut_cache
  
  let drop_generic () = 
    Cache.Lru.clear generic_cache
  
  let add_shortcut shortcut =
    Log.Global.debug "[cache|+] %s" shortcut.Model.Shortcut_j.id;
    Cache.Lru.add shortcut_cache ~key:shortcut.Model.Shortcut_j.id ~data:shortcut

  let shortcut_of_id id =
    Cache.Lru.find shortcut_cache id

  let add_shortcuts (key: int * int) (shortcuts: Model.Shortcut_j.t list) =
    Cache.Lru.add generic_cache ~key:key ~data:shortcuts
  
  let shortcuts_of_page (page: int * int) =
    let (p, c) = page in Log.Global.debug "[cache|+] %d %d" p c;
    Cache.Lru.find generic_cache page
end
