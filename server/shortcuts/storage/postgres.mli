module type Config = sig
  val pool: (Caqti_async.connection, Caqti_error.t) Caqti_async.Pool.t
end

module Make (Conf: Config): Interface.S
