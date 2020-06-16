export default {
	icon: (name, tooltip) => {
		const callback = `onclick="Aqua.code.cbs('${name}')"`;
		const span = `<span class="aqua tooltip-hover">${tooltip}</span>`;
		return `<a class="aqua tooltip-item ${name}" ${callback}>${span}</a>`;
	},

	snackbar: (type, id) => {
		let barContainer = document.querySelector('.aqua-bars');
		if (!barContainer) {
			const container = document.createElement('div');
			container.className = 'aqua-bars';
			barContainer = document.body.appendChild(container);
		}
		const snackbar = document.createElement('div');
		const main = document.createElement('main');
		const icon = document.createElement('span');
		snackbar.id = `aqua-${type}-${id}`;
		snackbar.className = `aqua-snackbar ${type}`;
		icon.addEventListener('click', () => snackbar.classList.remove('show'));
		snackbar.appendChild(main);
		snackbar.appendChild(icon);
		return barContainer.appendChild(snackbar);
	},
};
