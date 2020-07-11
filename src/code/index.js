import callbacks from '../utils/callbacks';
import create from '../utils/create';
import highlight from '../utils/highlight';
import { isElement, isNode } from '../utils/check';

function createToolbar() {
	const toggle = create.icon('list', 'Toggle\nNumbering');
	const copy = create.icon('clipboard', 'Copy');
	return `<div class="aqua code-toolbar">${toggle}${copy}</div>`;
}

function wrapSource(source, dataset) {
	const { language, lineStart } = dataset;
	const langClass = `language-${language ? language : 'none'}`;
	const classes = `class="aqua code-block ${langClass}"`;
	const data = `data-language="${language ? language : ''}" `;

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

function encloseBlock(source, dataset) {
	const { language, title } = dataset;
	const classes = `class="aqua code-header ${title ? '' : 'empty'}"`;
	const data = `data-language="${language ? language : ''}"`;

	const content = title ? `<span class="overflow-wrapper">${title}</span>` : '';
	const header = `<header ${classes} ${data}>${content}${createToolbar()}</header>`;

	const codeBlock = wrapSource(source, dataset);
	return `<pre class="aqua code-box">${header}${codeBlock}</pre>`;
}

export default {
	cbs: (name) => callbacks.code(name),
	highlightAll: highlight.all,

	highlight: function (source, dataset) {
		return encloseBlock(source, dataset);
	},
	init: function (container) {
		container = container || document.body;
		if (isElement(container) || isNode(container)) {
			for (const node of container.querySelectorAll('pre.aqua code-block')) {
				if (node.getAttribute('data-aqua') === 'watered') continue;
				const { textContent, dataset } = node;
				node.outerHTML = encloseBlock(textContent, dataset);
			}
		}
	},
};
