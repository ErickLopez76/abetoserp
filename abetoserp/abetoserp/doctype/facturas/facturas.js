// Copyright (c) 2018, ErickLopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Facturas','btn_anular', function(frm,cdt,cdn) {
	if (confirm('Estás Seguro de anular este Documento?')) {
    // Save it!
    //alert("click");
    frappe.call({
    	method: "abetoserp.abetoserp.doctype.facturas.facturas.anulardoc",
    	args: {
    		doc_name: frm.doc.name }
    	//callback: callback(r){ }
    });
    frm.set_value("estado", 'A');
    location.reload();
    window.location.href = '../desk#List/Facturas/List';
    // window.history.back();
    // location.reload();
//    var d = locals[cdt][cdn];
//    return get_server_fields('testdef', 'Facturas', frm, cdt, cdn, 1);
	} else {
    // Do nothing!
    alert("NO");
	}
	
	});
//frappe.ui.form.on("{{ Doctype }}", "{{ button_field_name }}", function(frm) {
//    alert("click");
//}