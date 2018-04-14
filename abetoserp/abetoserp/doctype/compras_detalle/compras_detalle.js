frappe.ui.form.on("Compras_detalle","precio_compra",funcion(frm, doctype,name) {
	        var row = locals[doctype][name];
	        row.precio_total = row.precio_compra * 5;
	        refresh_field("items")
});

