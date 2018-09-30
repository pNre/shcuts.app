module Main: Interface.S = struct
  open Async
  open Core

  module Pg = Postgres.Make(struct 
    open Caqti_async
    let connection_url = Sys.getenv_exn "PG_CONNECTION_STRING"
    let pool =
      match connect_pool ~max_size:16 (Uri.of_string connection_url) with
      | Ok pool -> pool
      | Error err -> failwith (Caqti_error.show err)
  end)

  module Ch = Cache.Make

  type error = Pg.error

  let drop () = 
    Ch.drop ();
    Pg.drop ()

  let create = Pg.create

  let cache_add_shortcut s =
    Ch.add_shortcut s; s

  let add_shortcut s =
    s
    |> cache_add_shortcut
    |> Pg.add_shortcut

  let shortcuts_of_page page =
    match Ch.shortcuts_of_page page with
    | Some s ->
      let (p, c) = page in Log.Global.debug "[cache|hit] %d %d" p c;
      Deferred.return (Ok s)
    | None ->
      Pg.shortcuts_of_page page
      >>| Result.map ~f:(fun s -> Ch.add_shortcuts page s; s)

  let shortcut_of_id id =
    match Ch.shortcut_of_id id with
    | Some s -> 
      Log.Global.debug "[cache|hit] %s" s.id;
      Deferred.return (Ok s)
    | None ->
      Pg.shortcut_of_id id
      >>| Result.map ~f:cache_add_shortcut
   
  let string_of_error = Pg.string_of_error
end
