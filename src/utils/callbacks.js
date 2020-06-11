import create from './create';

const cache = { toolbar: { add: null, remove: null } };
const codeCallback = {
	copy: () => {
		let codeBlock = window.event.target;
		while (!codeBlock.classList.contains('aqua-code-box')) {
			codeBlock = codeBlock.parentNode;
		}
		const source = codeBlock.childNodes[1].textContent;

		const copyArea = document.createElement('textarea');
		copyArea.className = 'ghost-area';
		copyArea.value = source;
		document.body.appendChild(copyArea);
		copyArea.focus();
		copyArea.select();

		let snackbar = document.querySelector('.aqua-snackbar.code#aqua-code-copy');
		if (!snackbar) snackbar = create.snackbar('code', 'copy');
		const [textField] = snackbar.childNodes;
		try {
			if (document.execCommand('copy')) textField.textContent = 'Copied to clipboard!';
			else textField.textContent = 'Copy failed';
		} catch (err) {
			textField.textContent = `An error occurred --> ${err}`;
		}

		clearTimeout(cache.toolbar.add);
		clearTimeout(cache.toolbar.remove);
		if (snackbar.classList.contains('show')) {
			snackbar.classList.remove('show');
			cache.toolbar.add = setTimeout(() => snackbar.classList.add('show'), 400);
		} else cache.toolbar.add = setTimeout(() => snackbar.classList.add('show'), 200);
		cache.toolbar.remove = setTimeout(() => snackbar.classList.remove('show'), 5000);

		document.body.removeChild(copyArea);
	},
	toggle: () => {
		let codeBlock = window.event.target;
		while (!codeBlock.classList.contains('aqua-code-box')) {
			codeBlock = codeBlock.parentNode;
		}
		codeBlock.childNodes[1].classList.toggle('numbered');
	},
};

export default {
	code: codeCallback,
};
