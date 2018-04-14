// Copyright (c) 2018, ErickLopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Compras',"refresh", function(frm) {
	frappe.ui.form.on("Compras_detalle" {
		"detalle_compra": function(frm) {
			frm.add_fetch("detalle_compra","id_producto","nombre_producto");
		}

	});
});
