export const create = {
	icon(name: string, tooltip: string) {
		const callback = `onclick="Aqua.code.cbs('${name}')"`;
		const span = `<span class="aqua tooltip-hover">${tooltip}</span>`;
		return `<a class="aqua tooltip-item ${name}" ${callback}>${span}</a>`;
	},
	snackbar(type: string) {
		let container = document.querySelector('.aqua.bars');
		if (!container) {
			const wrapper = document.createElement('div');
			wrapper.className = 'aqua bars';
			container = document.body.appendChild(wrapper);
		}
		const snackbar = document.createElement('section');
		snackbar.className = `aqua snackbar ${type}`;

		const div = document.createElement('div');
		const icon = document.createElement('span');
		icon.addEventListener('click', () => snackbar.classList.remove('show'));

		snackbar.appendChild(div);
		snackbar.appendChild(icon);
		return container.appendChild(snackbar);
	},
};
