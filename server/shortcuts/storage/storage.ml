module type MainStorage = sig
  include Interface.S with type error := Storage_error.t and type 'a t := ('a, Storage_error.t) result Async.Deferred.t
  val clear_cache : unit -> unit
  val update_shortcut : Model.Shortcut_j.t -> (Model.Shortcut_j.t -> bool) -> (Model.Shortcut_j.t, Storage_error.t) result Async.Deferred.t
end

module Main : MainStorage = struct
  open Async
  open Core

  module Pg = Postgres.Make(struct 
    open Caqti_async
    let connection_url = Sys.getenv_exn "PG_CONNECTION_STRING"
    let pool_size = Sys.getenv "PG_POOL_SIZE" |> Option.value_map ~default:16 ~f:int_of_string
    let pool =
      match connect_pool ~max_size:pool_size (Uri.of_string connection_url) with
      | Ok pool -> pool
      | Error err -> failwith (Caqti_error.show err)
  end)

  module Ch = Cache.Make

  let string_of_error s = 
    Storage_error.to_string s

  let map_error r =
    Result.map_error r ~f:(fun x -> Storage_error.Db x)

  let create () = 
    Pg.create ()
    >>| map_error

  let drop () = 
    Ch.drop ();
    Pg.drop ()
    >>| map_error

  let clear_cache = Ch.drop

  let add_shortcut s =
    Ch.drop_pages ();
    s
    |> Ch.add_shortcut
    |> Pg.add_shortcut
    >>| map_error

  let update_shortcut s condition =
    let shortcut = Ch.add_shortcut s in
    if condition shortcut then
      Pg.add_shortcut shortcut >>| map_error
    else
      Deferred.return (Ok shortcut)

  let shortcuts_of_page page =
    match Ch.shortcuts_of_page page with
    | s when List.length s > 0 ->
      let (p, c) = page in Log.Global.debug "[cache|hit] %d %d" p c;
      Deferred.return (Ok s)
    | _ ->
      Pg.shortcuts_of_page page
      >>| Result.map ~f:(Ch.add_shortcuts page)
      >>| map_error

  let shortcut_of_id id =
    match Ch.shortcut_of_id id with
    | Some s -> 
      Log.Global.debug "[cache|hit] %s" s.id;
      Deferred.return (Ok (Some s))
    | None ->
      Pg.shortcut_of_id id
      >>| Result.map ~f:(Option.map ~f:Ch.add_shortcut)
      >>| map_error
end
