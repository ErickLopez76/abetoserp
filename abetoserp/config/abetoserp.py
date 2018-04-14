from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Stock Transactions"),
			"items": [
				{
					"type": "doctype",
					"name": "Compras",
				},
				{
					"type": "doctype",
					"name": "Facturacion",
				}
			]
		},
		{
			"label": _("Movimientos"),
			"items": [
				{
					"type": "doctype",
					"name": "Movimientos",
				},
				{
					"type": "doctype",
					"name": "Tipos_movimiento",
				}
			]
		}
	]
