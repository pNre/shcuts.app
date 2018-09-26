open Caqti_async

module Main: Interface.S = struct
  module Pg = Postgres.Make(struct 
    let connection_url = "postgresql://pNre:@localhost:5432/pNre"
    let pool =
      match connect_pool ~max_size:16 (Uri.of_string connection_url) with
      | Ok pool -> pool
      | Error err -> failwith (Caqti_error.show err)
  end)

  type error = Pg.error

  let drop = Pg.drop
  let create = Pg.create
  let add_shortcut = Pg.add_shortcut
  let shortcut_of_id = Pg.shortcut_of_id
  let string_of_error = Pg.string_of_error
end
