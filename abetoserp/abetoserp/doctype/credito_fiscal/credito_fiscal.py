# -*- coding: utf-8 -*-
# Copyright (c) 2018, ErickLopez and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Credito_Fiscal(Document):
	pass
@frappe.whitelist()
def anulardoc(doc_name):
	ccf = frappe.get_doc("Credito_Fiscal", doc_name)
	ccf.estado = 'A'
	ccf.save()
