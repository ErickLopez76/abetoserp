from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Inventarios"),
			"items": [
				{
					"type": "doctype",
					"name": "Productos",
				},
				{
					"type": "doctype",
					"name": "Lineas",
				},
				{
					"type": "doctype",
					"name": "Compras",
				},
				{
					"type": "doctype",
					"name": "Movimientos",
				},
				{
					"type": "doctype",
					"name": "Tipos_movimiento",
				}
			]
		},
		{
			"label": _("Facturacion"),
			"items": [
				{
					"type": "doctype",
					"name": "Facturas",
				},
				{
					"type": "doctype",
					"name": "Credito_Fiscal",
				}
			]
		}
	]
