(* Auto-generated from "shortcut.atd" *)
[@@@ocaml.warning "-27-32-35-39"]

type t = Shortcut_t.t = {
  id: string;
  name: string;
  color: string option;
  description: string option;
  plist: string option;
  owners_address: string option
}

type t_list = Shortcut_t.t_list

val write_t :
  Bi_outbuf.t -> t -> unit
  (** Output a JSON value of type {!t}. *)

val string_of_t :
  ?len:int -> t -> string
  (** Serialize a value of type {!t}
      into a JSON string.
      @param len specifies the initial length
                 of the buffer used internally.
                 Default: 1024. *)

val read_t :
  Yojson.Safe.lexer_state -> Lexing.lexbuf -> t
  (** Input JSON data of type {!t}. *)

val t_of_string :
  string -> t
  (** Deserialize JSON data of type {!t}. *)

val write_t_list :
  Bi_outbuf.t -> t_list -> unit
  (** Output a JSON value of type {!t_list}. *)

val string_of_t_list :
  ?len:int -> t_list -> string
  (** Serialize a value of type {!t_list}
      into a JSON string.
      @param len specifies the initial length
                 of the buffer used internally.
                 Default: 1024. *)

val read_t_list :
  Yojson.Safe.lexer_state -> Lexing.lexbuf -> t_list
  (** Input JSON data of type {!t_list}. *)

val t_list_of_string :
  string -> t_list
  (** Deserialize JSON data of type {!t_list}. *)

