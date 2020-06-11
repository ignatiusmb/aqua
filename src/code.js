import callbacks from './utils/callbacks';
import check from './utils/check';
import create from './utils/create';
import highlight from './utils/highlight';

function createToolbar() {
	const toggle = create.icon('list', 'Toggle Numbering');
	const copy = create.icon('clipboard', 'Copy');
	return `<div class="aqua-code-toolbar">${toggle}${copy}</div>`;
}

function wrapSource(source, dataset) {
	const { language, lineStart } = dataset;
	const classes = `class="aqua-code language-${language ? language : 'none'}"`;
	const data = `data-language="${language ? language : ''}" data-aqua="watered"`;

	let highlighted = '';
	let whitespacePrefix = 0;
	let lineNumber = lineStart ? parseInt(lineStart) : 1;
	for (const line of highlight(source, language).split('\n')) {
		if (!line && lineNumber === 1) continue;
		if (lineNumber === 1) whitespacePrefix = line.search(/\S/);
		highlighted += `<code data-line="${lineNumber++}">${line.slice(whitespacePrefix)}</code>\n`;
	}
	while (/^$|"><\/code>/.test(highlighted.split('\n').slice(-1)[0])) {
		highlighted = highlighted.split('\n').slice(0, -1).join('\n');
	}
	return `<pre ${classes} ${data}>${highlighted}</pre>`;
}

function createCodeBlock(source, dataset) {
	const { language, title } = dataset;
	const classes = `class="aqua-code-header ${title ? '' : 'empty'}"`;
	const data = `data-language="${language ? language : ''}"`;
	const toolbar = createToolbar();
	const content = title ? `${title} ${toolbar}` : toolbar;
	const header = `<div ${classes} ${data}>${content}</div>`;

	const codeBlock = wrapSource(source, dataset);
	return `<div class="aqua-code-box">${header}${codeBlock}</div>`;
}

export default {
	callbacks: callbacks.code,
	highlightAll: highlight.all,

	highlight: function (source, dataset) {
		return createCodeBlock(source, dataset);
	},
	init: function (container) {
		container = container || document.body;
		if (check.isElement(container) || check.isNode(container)) {
			for (const node of container.querySelectorAll('pre.aqua-code')) {
				if (node.getAttribute('data-aqua') === 'watered') continue;
				const { textContent, dataset } = node;
				node.outerHTML = createCodeBlock(textContent, dataset);
			}
		}
	},
};
