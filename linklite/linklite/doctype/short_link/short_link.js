// Copyright (c) 2024, Build With Hussain and contributors
// For license information, please see license.txt

frappe.ui.form.on("Short Link", {
	refresh(frm) {
		frm.sidebar
			.add_user_action(__("Copy short link"))
			.attr("href", "#")
			.on("click", () => {
				const url = frappe.urllib.get_full_url(frm.doc.short_link);
				frappe.utils.copy_to_clipboard(url, __("Short link copied"));
			});
	},
});
