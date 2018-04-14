// Copyright (c) 2018, ErickLopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Movimientos',"id_tipo_mov", function(frm) {
	frappe.call({
		"method": "frappe.client.get",
		args: {
			doctype: "Tipos_movimiento",
			name: frm.doc.id_tipo_mov
		},
		callback: function (data) {
			frappe.model.set_value(frm.doctype,frm.docname,"nombre_mov", data.message.descripcion);
			frappe.model.set_value(frm.doctype,frm.docname,"wcosto", data.message.with_costo);
			//alert(data.message.with_costo);
			//var isro = cur_frm.doc.wcosto;
			var isro = data.message.with_costo;

			//alert(isro);
			var df1 = frappe.meta.get_docfield("Movimientos Detalle","costo",cur_frm.doc.name);
			df1.read_only = !isro;
			//df1.hidden = !isro;
			//df1.in_list_view = isro;
    
			//cur_frm.fields_dict.detalles.grid.toggle_enable("costo", false);

			//cur_frm.fields_dict.detalles.grid.set_column_disp("costo", false);


			df1.refresh();
			refresh_field("[detalles]");


			//var df = frappe.meta.get_docfield("Movimientos Detalle", "detalles" , cur_frm.doc.name);
			//df.hidden = 0;
		}

	})
	//var df1 = frappe.meta.get_docfield("Movimientos Detalle","costo",cur_frm.doc.name);
	//df1.read_only = 1;

	//var field = frappe.utils.filter_dict ( cur_frm.fields_dict["detalles"].grid.grid_rows_by_docnam[cdn].docfields,{'fieldname':"costo"})[0];
	//field.df.read_only = true;
	//field.refresh();

	//Este codigo ayuda para establecer como requerido el campo
	//cur_frm.get_field("detalles").grid.toggle_reqd("costo",true);
	//
	// cur_frm.get_field("detalles").grid.toggle_read_only("costo",true);
	//
	//frm.fields_dict["detalles"].grid.toggle_enable("costo",true);
	//frm.fields_dict["detalles"].grid.set_column_disp("costo",true);
});

frappe.ui.form.on("Movimientos Detalle", "id_producto",function(frm,cdt,cdn) {
	var d = locals[cdt][cdn];
	frappe.call({
		"method": "frappe.client.get",
		args: {
			doctype: "Productos",
			name: d.id_producto
		},
		callback: function(data) {
			frappe.model.set_value(cdt,cdn,"nombre_producto",data.message.nombre)
		}
	}
	)
}
);

//frappe.ui.form.on("Movimientos","refresh", function(frm) {
//	cur_frm.fields_dict.detalles.grid.toggle_enable("costo",false);
//	cur_frm.fields_dict.detalles.grid.set_column_disp("costo",false);
//
//});
//
//frappe.ui.form.on("Movimientos Detalle","id_producto", function(frm,cdt,cdn){
//frappe.ui.form.on("Movimientos","onload",function(frm, cdt, cdn){
	//var field = frappe.utils.filter_dict(cur_frm.fields_dict["detalles"].grid.grid_rows_by_docnam[cdn].docfields,{"fieldname":"costo"}
	//)[0];
	//field.df.read_only = true;
	//field.refresh();
	//frappe.meta.get_docfield("Tipos_movimiento","costo","detalles").read_only=1;
	//cur_frm.refresh_fields();
	// var df1 = frappe.meta.get_docfield("Movimientos Detalle","costo",cur_frm.doc.name);
	//df1.read_only = 1;
//});
