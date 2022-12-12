import { clipboard } from 'mauss/web';
import { create } from './utils.js';

interface CodeDataset {
	language: string;
	lineStart: string;
	title: string;
}

function wrapSource(source: string, dataset: CodeDataset) {
	const { language, lineStart } = dataset;
	const classes = `class="aqua code-block language-${language || 'none'}"`;
	const data = `data-language="${language || ''}" `;

	let highlighted = '';
	let wsPrefixCount = 0;
	let lineNumber = lineStart ? parseInt(lineStart) : 1;
	for (const line of highlight(source, language).split('\n')) {
		if (!line && lineNumber === 1) continue;
		if (lineNumber === 1) wsPrefixCount = line.search(/\S/);
		highlighted += `<code data-line="${lineNumber++}">${line.slice(wsPrefixCount)}</code>\n`;
	}

	while (/^$|"><\/code>/.test(highlighted.split('\n').slice(-1)[0])) {
		if (!highlighted) break;
		highlighted = highlighted.split('\n').slice(0, -1).join('\n');
	}
	return `<div ${classes} ${data}>${highlighted}</div>`;
}

// const cache = {
// 	toolbar: { add: null, remove: null },
// };

export const code = {
	action(name: 'clipboard' | 'list') {
		let codeBlock = window.event!.target as HTMLElement;
		while (!codeBlock.classList.contains('code-box')) {
			codeBlock = codeBlock.parentNode as HTMLElement;
		}

		if (name === 'clipboard') {
			const source = codeBlock.childNodes[1].textContent || '';

			let snackbar = document.querySelector('.aqua.snackbar.code');
			if (!snackbar) snackbar = create.snackbar('code');

			const [textField] = snackbar.childNodes;
			clipboard.copy(source, {
				accept() {
					textField.textContent = 'Copied to clipboard!';
				},
				reject() {
					textField.textContent = `Failed to copy code`;
				},
			});

			// clearTimeout(cache.toolbar.add);
			// clearTimeout(cache.toolbar.remove);
			// if (snackbar.classList.contains('show')) {
			// 	snackbar.classList.remove('show');
			// 	cache.toolbar.add = setTimeout(() => snackbar.classList.add('show'), 400);
			// } else cache.toolbar.add = setTimeout(() => snackbar.classList.add('show'), 200);
			// cache.toolbar.remove = setTimeout(() => snackbar.classList.remove('show'), 5000);
		} else if (name === 'list') {
			const node = codeBlock.childNodes[1] as HTMLElement;
			if (node) node.classList.toggle('numbered');
		}
	},

	highlight(source: string, dataset: CodeDataset) {
		const { language, title } = dataset;
		const classes = `class="aqua code-header ${title ? '' : 'empty'}"`;
		const data = `data-language="${language ? language : ''}"`;

		const content = title ? `<span class="overflow-wrapper">${title}</span>` : '';

		const toggle = create.icon('list', 'Toggle\nNumbering');
		const copy = create.icon('clipboard', 'Copy');
		const header = `
	<header ${classes} ${data}>
		${content}
		<div class="aqua code-toolbar">${toggle}${copy}</div>
	</header>`;

		const codeBlock = wrapSource(source, dataset);
		return `<pre class="aqua code-box">${header}${codeBlock}</pre>`;
	},
	init(node: HTMLElement) {
		for (const child of node.querySelectorAll('pre.aqua code-block')) {
			if (child.getAttribute('data-aqua') === 'watered') continue;
			const { textContent, dataset } = child as HTMLElement;
			child.outerHTML = this.highlight(textContent || '', dataset as unknown as CodeDataset);
		}
	},
};
