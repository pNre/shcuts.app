module type Config = sig
  val pool: (Caqti_async.connection, Caqti_error.t) Caqti_async.Pool.t
end

module Make (Conf: Config): Interface.S = struct
  open Async
  open Conf
  open Core

  type error =
    | No_records 
    | Internal of Caqti_error.t

  module Mapping = struct
    let shortcut_base_type = Caqti_type.(tup4 string string (option string) (option string)) 
    let shortcut_type = Caqti_type.(tup3 shortcut_base_type (option string) (option string))

    let shortcut_of_base_result (id, name, description, color) =
      Model.Shortcut_j.{id; name; description; color; plist = None; owners_address = None}
    
    let shortcut_of_result ((id, name, description, color), plist, owners_address) =
      Model.Shortcut_j.{id; name; description; color; plist; owners_address = owners_address}
  end

  module Queries = struct
    let drop = 
      Caqti_request.exec Caqti_type.unit 
      "DROP TABLE shortcuts"

    let create =
      Caqti_request.exec Caqti_type.unit
      {|
        CREATE TABLE shortcuts (
          id VARCHAR(64) NOT NULL PRIMARY KEY,
          name TEXT NOT NULL,
          description TEXT,
          plist TEXT,
          owners_address VARCHAR(48),
          color CHAR(8),
          insert_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      |}

    let shortcuts_of_page =
      Caqti_request.collect
        Caqti_type.(tup2 int int) Mapping.shortcut_base_type
        {|
          SELECT id, name, description, color
          FROM shortcuts
          ORDER BY insert_time DESC
          OFFSET ?
          LIMIT ?
        |}

    let shortcut_of_id =
      Caqti_request.find_opt 
        Caqti_type.string Mapping.shortcut_type
        {|
          SELECT id, name, description, color, plist, owners_address
          FROM shortcuts
          WHERE id = ?
        |}
      
    let add_shortcut =
      Caqti_request.exec Mapping.shortcut_type
        {|
          INSERT INTO shortcuts
          (id, name, description, color, plist, owners_address)
          VALUES
          (?, ?, ?, ?, ?, ?)
        |}
  end

  let drop () =
    let drop' (module Db : Caqti_async.CONNECTION) = Db.exec Queries.drop () in
    Caqti_async.Pool.use drop' pool
    >>| Result.map_error ~f:(fun e -> (Internal e))

  let create () =
    let create' (module Db : Caqti_async.CONNECTION) = Db.exec Queries.create () in
    Caqti_async.Pool.use create' pool
    >>| Result.map_error ~f:(fun e -> (Internal e))

  let add_shortcut shortcut =
    let add_shortcut' (module Db : Caqti_async.CONNECTION) = 
      let values = Model.Shortcut_j.((shortcut.id, shortcut.name, shortcut.description, shortcut.color), shortcut.plist, shortcut.owners_address) in
      Db.exec Queries.add_shortcut values in
    Caqti_async.Pool.use add_shortcut' pool
    >>| Result.map_error ~f:(fun e -> (Internal e))

  let shortcuts_of_page (limit, count) =
    let shortcuts_of_page' (module Db: Caqti_async.CONNECTION) = Db.collect_list Queries.shortcuts_of_page (limit, count) in
    Caqti_async.Pool.use shortcuts_of_page' pool
    >>| function
    | Ok results -> Ok (List.map ~f:Mapping.shortcut_of_base_result results)
    | Error e -> Error (Internal e)

  let shortcut_of_id id =
    Log.Global.debug "[db|fetch] %s" id;
    let shortcut_of_id' (module Db : Caqti_async.CONNECTION) = Db.find_opt Queries.shortcut_of_id id in
    Caqti_async.Pool.use shortcut_of_id' pool
    >>| function
    | Ok (Some t) -> Ok (Mapping.shortcut_of_result t)
    | Ok None -> Error No_records
    | Error e -> Error (Internal e)

  let string_of_error = function
  | No_records -> "No records"
  | Internal e -> Caqti_error.show e
end
