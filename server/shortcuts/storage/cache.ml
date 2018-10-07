module type Cache = sig
  include Interface.S with type error := unit and type 'a t := 'a
  val drop_shortcuts : unit -> unit
  val drop_pages : unit -> unit
  val add_shortcuts : int * int -> Model.Shortcut_t.t list -> Model.Shortcut_t.t list
end

module Make : Cache = struct
  open Async
  open Core
  open Core_extended

  let shortcut_cache = Cache.Lru.create ~destruct:None 256
  let pages_cache = Cache.Lru.create ~destruct:None 16
  let generic_cache = Cache.Lru.create ~destruct:None 16

  let create () =
    ()

  let drop_shortcuts () =
    Cache.Lru.clear shortcut_cache

  let drop_pages () = 
    Cache.Lru.clear pages_cache

  let drop_generic () =
    Cache.Lru.clear generic_cache

  let drop () =
    drop_shortcuts ();
    drop_pages ();
    drop_generic ()

  let string_of_error () =
    "Cache error"

  let add_shortcut shortcut =
    Log.Global.debug "[cache|+] %s" shortcut.Model.Shortcut_j.id;
    Cache.Lru.add shortcut_cache ~key:shortcut.Model.Shortcut_j.id ~data:shortcut;
    shortcut

  let shortcut_of_id id =
    Cache.Lru.find shortcut_cache id

  let add_shortcuts key shortcuts =
    Cache.Lru.add pages_cache ~key:key ~data:shortcuts;
    shortcuts
  
  let shortcuts_of_page (page: int * int) =
    let (p, c) = page in Log.Global.debug "[cache|+] %d %d" p c;
    Cache.Lru.find pages_cache page
    |> Option.value ~default:[]
end
