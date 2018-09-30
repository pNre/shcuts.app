#include <strings.h>
#include <caml/mlvalues.h>
#include <caml/alloc.h>
#include <caml/custom.h>
#include <caml/memory.h>
#include <plist/plist.h>
#include <stdio.h>

#define Val_none Val_int(0)

static value Val_some(value v) {
	CAMLparam1(v);
	CAMLlocal1(some);
	some = caml_alloc(1, 0);
	Store_field(some, 0, v);
	CAMLreturn(some);
}

void plist_of_bytes(value v, plist_t *plist) {
    char *in_plist_data = (char *)Bytes_val(v);
    mlsize_t in_plist_length = caml_string_length(v);
    plist_from_memory(in_plist_data, in_plist_length, plist);
}

CAMLprim
value binary_plist_to_xml(value v) {
    CAMLparam1(v);
	CAMLlocal1(s);

    plist_t in_plist = NULL;
    plist_of_bytes(v, &in_plist);

    if (!in_plist) {
        CAMLreturn(Val_none);
    }

    char *out_plist_data = NULL;
    uint32_t out_plist_length;
    plist_to_xml(in_plist, &out_plist_data, &out_plist_length);

    if (!out_plist_data) {
        plist_free(in_plist);
        CAMLreturn(Val_none);
    }

    s = caml_copy_string(out_plist_data);

    free(out_plist_data);
    plist_free(in_plist);

    CAMLreturn(Val_some(s));
}

CAMLprim
value plist_path_to_int(value plist, value path) {
    CAMLparam2(plist, path);

    mlsize_t path_components_count = caml_array_length(path);
    if (path_components_count == 0) {
        CAMLreturn(Val_none);
    }

    plist_t in_plist = NULL;
    plist_of_bytes(plist, &in_plist);

    if (!in_plist) {
        CAMLreturn(Val_none);
    }

    plist_t in_plist_node_ptr = in_plist;
    while (path != Val_none && in_plist_node_ptr) {
        in_plist_node_ptr = plist_dict_get_item(in_plist_node_ptr, String_val(Field(path, 0)));
        path = Field(path, 1);
    }

    if (!in_plist_node_ptr || !PLIST_IS_UINT(in_plist_node_ptr)) {
        plist_free(in_plist);
        CAMLreturn(Val_none);
    }

    uint64_t v;
    plist_get_uint_val(in_plist_node_ptr, &v);
    plist_free(in_plist);

    CAMLreturn(Val_some(caml_copy_int64(v)));
}
