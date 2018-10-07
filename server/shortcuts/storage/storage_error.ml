type t =
  | Db of Caqti_error.t

let to_string = function
  | Db err -> Caqti_error.show err
