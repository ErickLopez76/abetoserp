// Copyright (c) 2018, ErickLopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Credito_Fiscal','btn_anular', function(frm,cdt,cdn) {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = dd + '/' + mm + '/' + yyyy;
	// Habilitar nuevamente
	// prompt("Fecha de anulación",today);
	if (confirm('Estás Seguro de anular este Documento?')) {
    frappe.call({
    	method: "abetoserp.abetoserp.doctype.credito_fiscal.credito_fiscal.anulardoc",
    	args: {
    		doc_name: frm.doc.name }
    	//callback: callback(r){ }
    });
    frm.set_value("estado", 'A');
    location.reload();
    window.location.href = '../desk#List/Credito_Fiscal/List';

	} else {
    // Do nothing!
    alert("NO");
	}
	
	});
