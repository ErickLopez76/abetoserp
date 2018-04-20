// Copyright (c) 2018, ErickLopez and contributors
// For license information, please see license.txt
// Hola
// otro hola
frappe.ui.form.on("Compras_detalle","precio_total",function(frm,cdt,cdn) {
	var d = locals[cdt][cdn];
	frappe.model.set_value(cdt,cdn,"precio_compra",d.precio_total / d.cantidad);
	var total = 0;
	frm.doc.detalle_compra.forEach(function(d) {total += d.precio_total; });
	
	frm.set_value("total_compra", total);
});
frappe.ui.form.on("Compras_detalle","cantidad",function(frm,cdt,cdn) {
	var d = locals[cdt][cdn];
	frappe.model.set_value(cdt,cdn,"precio_compra",d.precio_total / d.cantidad);

});

frappe.ui.form.on("Compras",{
	onload:function(frm,cdt,cdn){
	var d = locals[cdt][cdn];	
	var total = 0;
	frm.doc.detalle_compra.forEach(function(d) {total += d.precio_total; });
	
	frm.set_value("total_compra", total);	
	}
});

// frappe.ui.form.on("Compras_detalle","id_producto",function(frm,cdt,cdn) {
// 	var d = locals[cdt][cdn];
// 	frappe.call({
// 		"method": "frappe.client.get",
// 		args: {
// 			doctype: "Productos",
// 			name: d.id_producto
// 		},
// 		callback: function(data) {
// 			frappe.model.set_value(cdt,cdn,"nombre_producto", data.message.nombre)
// 		}
// 	})
// });


