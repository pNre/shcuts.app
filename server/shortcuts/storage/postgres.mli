module type Config = sig
  val pool: (Caqti_async.connection, Caqti_error.t) Caqti_async.Pool.t
end

module type Postgres = sig
  include Interface.S with type error := Caqti_error.t and type 'a t := ('a, Caqti_error.t) result Async.Deferred.t
end

module Make (Conf: Config): Postgres
