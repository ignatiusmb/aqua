import { clipboard } from 'mauss/web';
import { getHighlighter } from 'shiki';
import { create } from './utils.js';

interface CodeDataset {
	language: string;
	lineStart: string;
	title: string;
}

const highlighter = getHighlighter({ theme: 'github-dark' });

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

	async transform(source: string, dataset: CodeDataset) {
		const { codeToHtml } = await highlighter;
		const { language, title, lineStart } = dataset;

		let highlighted = '';
		let wsPrefixCount = 0;
		let lineNumber = lineStart ? +lineStart : 1;
		for (const line of codeToHtml(source, { lang: language }).split('\n')) {
			if (!line && lineNumber === 1) continue;
			if (lineNumber === 1) wsPrefixCount = line.search(/\S/);
			highlighted += `<code data-line="${lineNumber++}">${line.slice(wsPrefixCount)}</code>\n`;
		}

		while (highlighted && /^$|"><\/code>/.test(highlighted.split('\n').slice(-1)[0])) {
			highlighted = highlighted.split('\n').slice(0, -1).join('\n');
		}

		return `
		<pre class="aqua code-box">
			<header 
				class="aqua code-header ${title ? '' : 'empty'}"
				data-language="${language || ''}"
			>
				${title ? `<span class="overflow-wrapper">${title}</span>` : ''}
				<div class="aqua code-toolbar">
					${create.icon('list', 'Toggle\nNumbering')}
					${create.icon('clipboard', 'Copy')}
				</div>
			</header>

			<div 
				class="aqua code-block language-${language || 'none'}"
				data-language="${language || ''}"
			>
				${highlighted}
			</div>
		</pre>`;
	},

	async highlight(node: HTMLElement) {
		for (const child of node.querySelectorAll('pre.aqua code-block')) {
			if (child.getAttribute('data-aqua') === 'hydrated') continue;
			const dataset = (child as HTMLElement).dataset as unknown as CodeDataset;
			child.outerHTML = await this.transform(child.textContent || '', dataset);
		}
	},

	async init(node: HTMLElement) {
		for (const child of node.querySelectorAll('pre.aqua code-block')) {
			if (child.getAttribute('data-aqua') === 'hydrated') continue;
			const dataset = (child as HTMLElement).dataset as unknown as CodeDataset;
			child.outerHTML = await this.transform(child.textContent || '', dataset);
		}
	},
};
