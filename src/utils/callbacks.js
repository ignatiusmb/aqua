import create from './create';

const cache = { toolbar: { add: null, remove: null } };
const codeCallback = async (name) => {
	if (name === 'clipboard') {
		let codeBlock = window.event.target;
		while (!codeBlock.classList.contains('code-box')) {
			codeBlock = codeBlock.parentNode;
		}
		const source = codeBlock.childNodes[1].textContent;

		let snackbar = document.querySelector('.aqua.snackbar.code');
		if (!snackbar) snackbar = create.snackbar('code', 'copy');
		const [textField] = snackbar.childNodes;

		try {
			await navigator.clipboard.writeText(source);
			textField.textContent = 'Copied to clipboard!';
		} catch (error) {
			textField.textContent = `Failed to copy: ${error}`;
		}

		clearTimeout(cache.toolbar.add);
		clearTimeout(cache.toolbar.remove);
		if (snackbar.classList.contains('show')) {
			snackbar.classList.remove('show');
			cache.toolbar.add = setTimeout(() => snackbar.classList.add('show'), 400);
		} else cache.toolbar.add = setTimeout(() => snackbar.classList.add('show'), 200);
		cache.toolbar.remove = setTimeout(() => snackbar.classList.remove('show'), 5000);
	} else if (name === 'list') {
		let codeBlock = window.event.target;
		while (!codeBlock.classList.contains('code-box')) {
			codeBlock = codeBlock.parentNode;
		}
		codeBlock.childNodes[1].classList.toggle('numbered');
	}
};

export default {
	code: (name) => codeCallback(name),
};
