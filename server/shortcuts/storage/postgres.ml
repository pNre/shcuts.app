module type Config = sig
  val pool: (Caqti_async.connection, Caqti_error.t) Caqti_async.Pool.t
end

module type Postgres = sig
  include Interface.S with type error := Caqti_error.t and type 'a t := ('a, Caqti_error.t) result Async.Deferred.t
end

module Make (Conf: Config) : Postgres = struct
  open Async
  open Conf
  open Core

  let string_of_error = Caqti_error.show

  module Mapping = struct
    let shortcut_base_type = Caqti_type.(tup2 (tup3 string string (option string)) (tup2 (option string) string))
    let shortcut_type = Caqti_type.(tup3 shortcut_base_type (option string) (option string))

    let shortcut_of_base_result ((id, name, description), (color, views)) =
      Model.Shortcut_j.{id; name; description; color; plist = None; owners_address = None; views = (Int64.of_string views)}
    
    let shortcut_of_result (((id, name, description), (color, views)), plist, owners_address) =
      Model.Shortcut_j.{id; name; description; color; plist; owners_address = owners_address; views = (Int64.of_string views)}
  end

  module Queries = struct
    let drop =
      [ Caqti_request.exec Caqti_type.unit "DROP TABLE shortcuts"
      ; Caqti_request.exec Caqti_type.unit "DROP TABLE shortcut_stats" ]

    let create =
      let shortcuts = Caqti_request.exec Caqti_type.unit
      {|
        CREATE TABLE shortcuts (
          id VARCHAR(64) NOT NULL PRIMARY KEY,
          name TEXT NOT NULL,
          description TEXT,
          plist TEXT,
          owners_address VARCHAR(48),
          color CHAR(8),
          views BIGINT NOT NULL DEFAULT 0,
          insert_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      |} in

      let shortcut_views_index = Caqti_request.exec Caqti_type.unit {|
        CREATE INDEX shortcut_views ON shortcuts (views)
      |} in

      [ shortcuts
      ; shortcut_views_index ]

    let shortcuts_of_page =
      Caqti_request.collect
        Caqti_type.(tup2 int int) Mapping.shortcut_base_type
        {|
          SELECT id, name, description, color, views
          FROM shortcuts
          ORDER BY insert_time DESC
          OFFSET ?
          LIMIT ?
        |}

    let shortcut_of_id =
      Caqti_request.find_opt 
        Caqti_type.string Mapping.shortcut_type
        {|
          SELECT id, name, description, color, views, plist, owners_address
          FROM shortcuts
          WHERE id = ?
        |}
      
    let add_shortcut =
      Caqti_request.exec Mapping.shortcut_type
        {|
          INSERT INTO shortcuts
          (id, name, description, color, views, plist, owners_address)
          VALUES
          (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT (id) DO UPDATE
          SET name = EXCLUDED.name,
              description = EXCLUDED.description,
              color = EXCLUDED.color,
              plist = EXCLUDED.plist,
              views = EXCLUDED.views
        |}
  end

  let transaction (f: (module Caqti_async.CONNECTION) -> (unit, Caqti_error.t) result Deferred.t) (module Db : Caqti_async.CONNECTION) = 
    match%bind Db.start () with
    | Ok _ -> 
      (match%bind f (module Db) with
      | Ok _ -> Db.commit ()
      | Error _ -> Db.rollback ())
    | Error e -> 
      Deferred.return (Error e)

  let exec_in_transaction queries = 
    transaction (fun (module Db: Caqti_async.CONNECTION) -> 
      Deferred.List.fold queries ~init:(Ok ()) ~f:(fun _ (query, params) -> Db.exec query params))

  let create () =
    let queries = List.map Queries.create ~f:(fun q -> (q, ())) in
    Caqti_async.Pool.use (exec_in_transaction queries) pool

  let drop () =
    let queries = List.map Queries.drop ~f:(fun q -> (q, ())) in
    Caqti_async.Pool.use (exec_in_transaction queries) pool

  let add_shortcut shortcut =
    Log.Global.debug "[db|fetch|add_shortcut] %s" shortcut.Model.Shortcut_j.id;
    let values = Model.Shortcut_j.(((shortcut.id, shortcut.name, shortcut.description), (shortcut.color, Int64.to_string shortcut.views)), shortcut.plist, shortcut.owners_address) in
    let%map result = Caqti_async.Pool.use (exec_in_transaction [(Queries.add_shortcut, values)]) pool in
    Result.map result ~f:(fun _ -> shortcut)

  let shortcuts_of_page (limit, count) =
    let shortcuts_of_page' (module Db: Caqti_async.CONNECTION) = Db.collect_list Queries.shortcuts_of_page (limit, count) in
    let%map result = Caqti_async.Pool.use shortcuts_of_page' pool in
    Result.map result ~f:(fun results -> List.map ~f:Mapping.shortcut_of_base_result results)

  let shortcut_of_id id =
    Log.Global.debug "[db|fetch|shortcut_of_id] %s" id;
    let shortcut_of_id' (module Db : Caqti_async.CONNECTION) = Db.find_opt Queries.shortcut_of_id id in
    let%map result = Caqti_async.Pool.use shortcut_of_id' pool in
    Result.map result ~f:(Option.map ~f:Mapping.shortcut_of_result)
end
