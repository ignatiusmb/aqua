import create from '../utils/create';

export default {
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

	init: function (container) {
		container = container || document.body;
		const snackbar = create.snackbar('form');
		for (const form of container.querySelectorAll('form.aqua-form')) {
			for (const input of form.querySelectorAll('input')) {
				input.replaceWith(this.wrapInput(document.cloneNode(input)));
			}
		}
	},
};
