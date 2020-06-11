export default {
	icon: (name, tooltip) => {
		let cbName = 'Aqua.code.callbacks';
		if (name === 'clipboard') cbName += '.copy';
		else if (name === 'list') cbName += '.toggle';
		const callback = `onclick="${cbName}()"`;
		const span = `<span class="aqua-ctb-tooltip">${tooltip}</span>`;
		return `<a class="aqua-ctb-item ${name}" ${callback}>${span}</a>`;
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
