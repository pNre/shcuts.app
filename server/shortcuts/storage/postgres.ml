module type Config = sig
  val pool: (Caqti_async.connection, Caqti_error.t) Caqti_async.Pool.t
end

module Make (Conf: Config): Interface.S = struct
  open Async
  open Conf
  open Core

  type error =
    | Not_found 
    | Internal of Caqti_error.t

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
          insert_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      |}

    let shortcut_of_id =
      Caqti_request.find_opt 
        Caqti_type.string Caqti_type.(tup4 string string string string)
        {|
          SELECT id, name, description, plist
          FROM shortcuts
          WHERE id = ?
        |}
      
    let add_shortcut =
      Caqti_request.exec
        Caqti_type.(tup4 string string string string)
        {|
          INSERT INTO shortcuts
          (id, name, description, plist)
          VALUES
          (?, ?, ?, ?)
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
      Db.exec Queries.add_shortcut Model.Shortcut.(shortcut.id, shortcut.name, shortcut.description, shortcut.plist) in
    Caqti_async.Pool.use add_shortcut' pool
    >>| Result.map_error ~f:(fun e -> (Internal e))

  let shortcut_of_id id =
    let shortcut_of_id' (module Db : Caqti_async.CONNECTION) = Db.find_opt Queries.shortcut_of_id id in
    Caqti_async.Pool.use shortcut_of_id' pool
    >>| function
    | Ok (Some (id, name, description, plist)) -> Ok Model.Shortcut.{id = id; name = name; description = description; plist = plist}
    | _ -> Error Not_found

  let string_of_error = function
    | Not_found -> "Item not found"
    | Internal e -> Caqti_error.show e
end
