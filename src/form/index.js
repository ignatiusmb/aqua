export default {
	/** @param {HTMLInputElement} input */
	wrapInput: (input) => {
		const label = document.createElement('label');
		const placeholder = document.createElement('span');
		label.htmlFor = input.type;
		input.placeholder = ' ';
		placeholder.textContent = input.placeholder;
		placeholder.textContent.charAt(0).toUpperCase();
		label.appendChild(input);
		label.appendChild(placeholder);
		return label;
	},

	/** @param {HTMLElement} container */
	init: function (container) {
		container = container || document.body;
		for (const form of container.querySelectorAll('form.aqua-form')) {
			for (const input of form.querySelectorAll('input')) {
				input.replaceWith(this.wrapInput(/** @type {HTMLInputElement} */ (input.cloneNode())));
			}
		}
	},
};
