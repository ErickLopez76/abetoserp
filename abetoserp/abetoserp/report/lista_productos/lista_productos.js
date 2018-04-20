frappe.query_reports["Productos"] = {
    "filters": [
        {
            "fieldname":"codigo",
            "label": __("Codigo"),
            "fieldtype": "Data",
            "options": "Codigo",
            "default": frappe.defaults.get_user_default("Productos")
        },
    ]
}