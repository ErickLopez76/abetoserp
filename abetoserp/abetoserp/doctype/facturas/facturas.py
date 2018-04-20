# -*- coding: utf-8 -*-
# Copyright (c) 2018, ErickLopez and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Facturas(Document):
	pass	
@frappe.whitelist()
def anulardoc(doc_name):
#	frappe.db.sql("""update `tabFacturas` set estado = 'A' """)
	factura = frappe.get_doc("Facturas", doc_name)
	factura.estado = 'A'
	factura.save()
