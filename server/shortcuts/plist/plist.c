#include <strings.h>
#include <caml/mlvalues.h>
#include <caml/alloc.h>
#include <caml/custom.h>
#include <caml/memory.h>
#include <plist/plist.h>

#define Val_none Val_int(0)

static value Val_some(value v) {
	CAMLparam1(v);
	CAMLlocal1(some);
	some = caml_alloc(1, 0);
	Store_field(some, 0, v);
	CAMLreturn(some);
}

CAMLprim
value binary_plist_to_xml(value v) {
    CAMLparam1(v);
    plist_t plist = NULL;

    char *out_plist_data = NULL;
    uint32_t out_plist_length;
    bzero(&plist, sizeof(plist));

    char *in_plist_data = (char *)Bytes_val(v);
    mlsize_t in_plist_length = caml_string_length(v);

    if (!plist_is_binary(in_plist_data, in_plist_length)) {
        CAMLreturn(Val_some(v));
    }

    plist_from_memory(in_plist_data, caml_string_length(v), &plist);
    if (!plist) {
        CAMLreturn(Val_none);
    }

    plist_to_xml(plist, &out_plist_data, &out_plist_length);
    if (!out_plist_data) {
        CAMLreturn(Val_none);
    }

	CAMLlocal1(s);
    s = caml_copy_string(out_plist_data);
    free(out_plist_data);
    CAMLreturn(Val_some(s));
}
