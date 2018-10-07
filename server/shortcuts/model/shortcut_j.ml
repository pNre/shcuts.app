(* Auto-generated from "shortcut.atd" *)
[@@@ocaml.warning "-27-32-35-39"]

type t = Shortcut_t.t = {
  id: string;
  name: string;
  color: string option;
  description: string option;
  plist: string option;
  owners_address: string option;
  views: Int64.t
}

type t_list = Shortcut_t.t_list

let write__1 = (
  Atdgen_runtime.Oj_run.write_option (
    Yojson.Safe.write_string
  )
)
let string_of__1 ?(len = 1024) x =
  let ob = Bi_outbuf.create len in
  write__1 ob x;
  Bi_outbuf.contents ob
let read__1 = (
  fun p lb ->
    Yojson.Safe.read_space p lb;
    match Yojson.Safe.start_any_variant p lb with
      | `Edgy_bracket -> (
          match Yojson.Safe.read_ident p lb with
            | "None" ->
              Yojson.Safe.read_space p lb;
              Yojson.Safe.read_gt p lb;
              (None : _ option)
            | "Some" ->
              Atdgen_runtime.Oj_run.read_until_field_value p lb;
              let x = (
                  Atdgen_runtime.Oj_run.read_string
                ) p lb
              in
              Yojson.Safe.read_space p lb;
              Yojson.Safe.read_gt p lb;
              (Some x : _ option)
            | x ->
              Atdgen_runtime.Oj_run.invalid_variant_tag p x
        )
      | `Double_quote -> (
          match Yojson.Safe.finish_string p lb with
            | "None" ->
              (None : _ option)
            | x ->
              Atdgen_runtime.Oj_run.invalid_variant_tag p x
        )
      | `Square_bracket -> (
          match Atdgen_runtime.Oj_run.read_string p lb with
            | "Some" ->
              Yojson.Safe.read_space p lb;
              Yojson.Safe.read_comma p lb;
              Yojson.Safe.read_space p lb;
              let x = (
                  Atdgen_runtime.Oj_run.read_string
                ) p lb
              in
              Yojson.Safe.read_space p lb;
              Yojson.Safe.read_rbr p lb;
              (Some x : _ option)
            | x ->
              Atdgen_runtime.Oj_run.invalid_variant_tag p x
        )
)
let _1_of_string s =
  read__1 (Yojson.Safe.init_lexer ()) (Lexing.from_string s)
let write_t : _ -> t -> _ = (
  fun ob x ->
    Bi_outbuf.add_char ob '{';
    let is_first = ref true in
    if !is_first then
      is_first := false
    else
      Bi_outbuf.add_char ob ',';
    Bi_outbuf.add_string ob "\"id\":";
    (
      Yojson.Safe.write_string
    )
      ob x.id;
    if !is_first then
      is_first := false
    else
      Bi_outbuf.add_char ob ',';
    Bi_outbuf.add_string ob "\"name\":";
    (
      Yojson.Safe.write_string
    )
      ob x.name;
    (match x.color with None -> () | Some x ->
      if !is_first then
        is_first := false
      else
        Bi_outbuf.add_char ob ',';
      Bi_outbuf.add_string ob "\"color\":";
      (
        Yojson.Safe.write_string
      )
        ob x;
    );
    (match x.description with None -> () | Some x ->
      if !is_first then
        is_first := false
      else
        Bi_outbuf.add_char ob ',';
      Bi_outbuf.add_string ob "\"description\":";
      (
        Yojson.Safe.write_string
      )
        ob x;
    );
    (match x.plist with None -> () | Some x ->
      if !is_first then
        is_first := false
      else
        Bi_outbuf.add_char ob ',';
      Bi_outbuf.add_string ob "\"plist\":";
      (
        Yojson.Safe.write_string
      )
        ob x;
    );
    (match x.owners_address with None -> () | Some x ->
      if !is_first then
        is_first := false
      else
        Bi_outbuf.add_char ob ',';
      Bi_outbuf.add_string ob "\"owners_address\":";
      (
        Yojson.Safe.write_string
      )
        ob x;
    );
    if !is_first then
      is_first := false
    else
      Bi_outbuf.add_char ob ',';
    Bi_outbuf.add_string ob "\"views\":";
    (
      Atdgen_runtime.Oj_run.write_int64
    )
      ob x.views;
    Bi_outbuf.add_char ob '}';
)
let string_of_t ?(len = 1024) x =
  let ob = Bi_outbuf.create len in
  write_t ob x;
  Bi_outbuf.contents ob
let read_t = (
  fun p lb ->
    Yojson.Safe.read_space p lb;
    Yojson.Safe.read_lcurl p lb;
    let field_id = ref (Obj.magic (Sys.opaque_identity 0.0)) in
    let field_name = ref (Obj.magic (Sys.opaque_identity 0.0)) in
    let field_color = ref (None) in
    let field_description = ref (None) in
    let field_plist = ref (None) in
    let field_owners_address = ref (None) in
    let field_views = ref (Obj.magic (Sys.opaque_identity 0.0)) in
    let bits0 = ref 0 in
    try
      Yojson.Safe.read_space p lb;
      Yojson.Safe.read_object_end lb;
      Yojson.Safe.read_space p lb;
      let f =
        fun s pos len ->
          if pos < 0 || len < 0 || pos + len > String.length s then
            invalid_arg "out-of-bounds substring position or length";
          match len with
            | 2 -> (
                if String.unsafe_get s pos = 'i' && String.unsafe_get s (pos+1) = 'd' then (
                  0
                )
                else (
                  -1
                )
              )
            | 4 -> (
                if String.unsafe_get s pos = 'n' && String.unsafe_get s (pos+1) = 'a' && String.unsafe_get s (pos+2) = 'm' && String.unsafe_get s (pos+3) = 'e' then (
                  1
                )
                else (
                  -1
                )
              )
            | 5 -> (
                match String.unsafe_get s pos with
                  | 'c' -> (
                      if String.unsafe_get s (pos+1) = 'o' && String.unsafe_get s (pos+2) = 'l' && String.unsafe_get s (pos+3) = 'o' && String.unsafe_get s (pos+4) = 'r' then (
                        2
                      )
                      else (
                        -1
                      )
                    )
                  | 'p' -> (
                      if String.unsafe_get s (pos+1) = 'l' && String.unsafe_get s (pos+2) = 'i' && String.unsafe_get s (pos+3) = 's' && String.unsafe_get s (pos+4) = 't' then (
                        4
                      )
                      else (
                        -1
                      )
                    )
                  | 'v' -> (
                      if String.unsafe_get s (pos+1) = 'i' && String.unsafe_get s (pos+2) = 'e' && String.unsafe_get s (pos+3) = 'w' && String.unsafe_get s (pos+4) = 's' then (
                        6
                      )
                      else (
                        -1
                      )
                    )
                  | _ -> (
                      -1
                    )
              )
            | 11 -> (
                if String.unsafe_get s pos = 'd' && String.unsafe_get s (pos+1) = 'e' && String.unsafe_get s (pos+2) = 's' && String.unsafe_get s (pos+3) = 'c' && String.unsafe_get s (pos+4) = 'r' && String.unsafe_get s (pos+5) = 'i' && String.unsafe_get s (pos+6) = 'p' && String.unsafe_get s (pos+7) = 't' && String.unsafe_get s (pos+8) = 'i' && String.unsafe_get s (pos+9) = 'o' && String.unsafe_get s (pos+10) = 'n' then (
                  3
                )
                else (
                  -1
                )
              )
            | 14 -> (
                if String.unsafe_get s pos = 'o' && String.unsafe_get s (pos+1) = 'w' && String.unsafe_get s (pos+2) = 'n' && String.unsafe_get s (pos+3) = 'e' && String.unsafe_get s (pos+4) = 'r' && String.unsafe_get s (pos+5) = 's' && String.unsafe_get s (pos+6) = '_' && String.unsafe_get s (pos+7) = 'a' && String.unsafe_get s (pos+8) = 'd' && String.unsafe_get s (pos+9) = 'd' && String.unsafe_get s (pos+10) = 'r' && String.unsafe_get s (pos+11) = 'e' && String.unsafe_get s (pos+12) = 's' && String.unsafe_get s (pos+13) = 's' then (
                  5
                )
                else (
                  -1
                )
              )
            | _ -> (
                -1
              )
      in
      let i = Yojson.Safe.map_ident p f lb in
      Atdgen_runtime.Oj_run.read_until_field_value p lb;
      (
        match i with
          | 0 ->
            field_id := (
              (
                Atdgen_runtime.Oj_run.read_string
              ) p lb
            );
            bits0 := !bits0 lor 0x1;
          | 1 ->
            field_name := (
              (
                Atdgen_runtime.Oj_run.read_string
              ) p lb
            );
            bits0 := !bits0 lor 0x2;
          | 2 ->
            if not (Yojson.Safe.read_null_if_possible p lb) then (
              field_color := (
                Some (
                  (
                    Atdgen_runtime.Oj_run.read_string
                  ) p lb
                )
              );
            )
          | 3 ->
            if not (Yojson.Safe.read_null_if_possible p lb) then (
              field_description := (
                Some (
                  (
                    Atdgen_runtime.Oj_run.read_string
                  ) p lb
                )
              );
            )
          | 4 ->
            if not (Yojson.Safe.read_null_if_possible p lb) then (
              field_plist := (
                Some (
                  (
                    Atdgen_runtime.Oj_run.read_string
                  ) p lb
                )
              );
            )
          | 5 ->
            if not (Yojson.Safe.read_null_if_possible p lb) then (
              field_owners_address := (
                Some (
                  (
                    Atdgen_runtime.Oj_run.read_string
                  ) p lb
                )
              );
            )
          | 6 ->
            field_views := (
              (
                Atdgen_runtime.Oj_run.read_int64
              ) p lb
            );
            bits0 := !bits0 lor 0x4;
          | _ -> (
              Yojson.Safe.skip_json p lb
            )
      );
      while true do
        Yojson.Safe.read_space p lb;
        Yojson.Safe.read_object_sep p lb;
        Yojson.Safe.read_space p lb;
        let f =
          fun s pos len ->
            if pos < 0 || len < 0 || pos + len > String.length s then
              invalid_arg "out-of-bounds substring position or length";
            match len with
              | 2 -> (
                  if String.unsafe_get s pos = 'i' && String.unsafe_get s (pos+1) = 'd' then (
                    0
                  )
                  else (
                    -1
                  )
                )
              | 4 -> (
                  if String.unsafe_get s pos = 'n' && String.unsafe_get s (pos+1) = 'a' && String.unsafe_get s (pos+2) = 'm' && String.unsafe_get s (pos+3) = 'e' then (
                    1
                  )
                  else (
                    -1
                  )
                )
              | 5 -> (
                  match String.unsafe_get s pos with
                    | 'c' -> (
                        if String.unsafe_get s (pos+1) = 'o' && String.unsafe_get s (pos+2) = 'l' && String.unsafe_get s (pos+3) = 'o' && String.unsafe_get s (pos+4) = 'r' then (
                          2
                        )
                        else (
                          -1
                        )
                      )
                    | 'p' -> (
                        if String.unsafe_get s (pos+1) = 'l' && String.unsafe_get s (pos+2) = 'i' && String.unsafe_get s (pos+3) = 's' && String.unsafe_get s (pos+4) = 't' then (
                          4
                        )
                        else (
                          -1
                        )
                      )
                    | 'v' -> (
                        if String.unsafe_get s (pos+1) = 'i' && String.unsafe_get s (pos+2) = 'e' && String.unsafe_get s (pos+3) = 'w' && String.unsafe_get s (pos+4) = 's' then (
                          6
                        )
                        else (
                          -1
                        )
                      )
                    | _ -> (
                        -1
                      )
                )
              | 11 -> (
                  if String.unsafe_get s pos = 'd' && String.unsafe_get s (pos+1) = 'e' && String.unsafe_get s (pos+2) = 's' && String.unsafe_get s (pos+3) = 'c' && String.unsafe_get s (pos+4) = 'r' && String.unsafe_get s (pos+5) = 'i' && String.unsafe_get s (pos+6) = 'p' && String.unsafe_get s (pos+7) = 't' && String.unsafe_get s (pos+8) = 'i' && String.unsafe_get s (pos+9) = 'o' && String.unsafe_get s (pos+10) = 'n' then (
                    3
                  )
                  else (
                    -1
                  )
                )
              | 14 -> (
                  if String.unsafe_get s pos = 'o' && String.unsafe_get s (pos+1) = 'w' && String.unsafe_get s (pos+2) = 'n' && String.unsafe_get s (pos+3) = 'e' && String.unsafe_get s (pos+4) = 'r' && String.unsafe_get s (pos+5) = 's' && String.unsafe_get s (pos+6) = '_' && String.unsafe_get s (pos+7) = 'a' && String.unsafe_get s (pos+8) = 'd' && String.unsafe_get s (pos+9) = 'd' && String.unsafe_get s (pos+10) = 'r' && String.unsafe_get s (pos+11) = 'e' && String.unsafe_get s (pos+12) = 's' && String.unsafe_get s (pos+13) = 's' then (
                    5
                  )
                  else (
                    -1
                  )
                )
              | _ -> (
                  -1
                )
        in
        let i = Yojson.Safe.map_ident p f lb in
        Atdgen_runtime.Oj_run.read_until_field_value p lb;
        (
          match i with
            | 0 ->
              field_id := (
                (
                  Atdgen_runtime.Oj_run.read_string
                ) p lb
              );
              bits0 := !bits0 lor 0x1;
            | 1 ->
              field_name := (
                (
                  Atdgen_runtime.Oj_run.read_string
                ) p lb
              );
              bits0 := !bits0 lor 0x2;
            | 2 ->
              if not (Yojson.Safe.read_null_if_possible p lb) then (
                field_color := (
                  Some (
                    (
                      Atdgen_runtime.Oj_run.read_string
                    ) p lb
                  )
                );
              )
            | 3 ->
              if not (Yojson.Safe.read_null_if_possible p lb) then (
                field_description := (
                  Some (
                    (
                      Atdgen_runtime.Oj_run.read_string
                    ) p lb
                  )
                );
              )
            | 4 ->
              if not (Yojson.Safe.read_null_if_possible p lb) then (
                field_plist := (
                  Some (
                    (
                      Atdgen_runtime.Oj_run.read_string
                    ) p lb
                  )
                );
              )
            | 5 ->
              if not (Yojson.Safe.read_null_if_possible p lb) then (
                field_owners_address := (
                  Some (
                    (
                      Atdgen_runtime.Oj_run.read_string
                    ) p lb
                  )
                );
              )
            | 6 ->
              field_views := (
                (
                  Atdgen_runtime.Oj_run.read_int64
                ) p lb
              );
              bits0 := !bits0 lor 0x4;
            | _ -> (
                Yojson.Safe.skip_json p lb
              )
        );
      done;
      assert false;
    with Yojson.End_of_object -> (
        if !bits0 <> 0x7 then Atdgen_runtime.Oj_run.missing_fields p [| !bits0 |] [| "id"; "name"; "views" |];
        (
          {
            id = !field_id;
            name = !field_name;
            color = !field_color;
            description = !field_description;
            plist = !field_plist;
            owners_address = !field_owners_address;
            views = !field_views;
          }
         : t)
      )
)
let t_of_string s =
  read_t (Yojson.Safe.init_lexer ()) (Lexing.from_string s)
let write__2 = (
  Atdgen_runtime.Oj_run.write_list (
    write_t
  )
)
let string_of__2 ?(len = 1024) x =
  let ob = Bi_outbuf.create len in
  write__2 ob x;
  Bi_outbuf.contents ob
let read__2 = (
  Atdgen_runtime.Oj_run.read_list (
    read_t
  )
)
let _2_of_string s =
  read__2 (Yojson.Safe.init_lexer ()) (Lexing.from_string s)
let write_t_list = (
  write__2
)
let string_of_t_list ?(len = 1024) x =
  let ob = Bi_outbuf.create len in
  write_t_list ob x;
  Bi_outbuf.contents ob
let read_t_list = (
  read__2
)
let t_list_of_string s =
  read_t_list (Yojson.Safe.init_lexer ()) (Lexing.from_string s)
