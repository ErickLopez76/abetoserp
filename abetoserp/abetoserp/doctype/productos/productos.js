// Copyright (c) 2018, ErickLopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Productos',"id_linea", function(frm) {
	frappe.call({
		"method": "frappe.client.get",
		args: {
			doctype: "Lineas",
			name: frm.doc.id_linea
		},
		callback: function (data) {
			frappe.model.set_value(frm.doctype, frm.docname, "nombre_linea",
				data.message.nombre_linea)
		}

	})
})
