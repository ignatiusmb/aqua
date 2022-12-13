import { getHighlighter } from 'shiki';
import { create, escape } from './utils.js';

export interface Dataset {
	language?: string;
	lineStart?: number;
	title?: string;
}

const highlighter = await getHighlighter({ theme: 'github-dark' });

export function transform(source: string, dataset: Dataset) {
	const { codeToThemedTokens } = highlighter;
	const { language, title, lineStart = 1 } = dataset;

	let highlighted = '';
	let line = lineStart;
	for (const tokens of codeToThemedTokens(source, language)) {
		let code = `<code data-line="${line++}">`;
		for (const { content, color } of tokens) {
			const style = color ? `style="color: ${color}"` : '';
			code += `<span ${style}>${escape(content)}</span>`;
		}
		highlighted += `${code}</code>\n`;
	}

	return `<pre data-aqua="block" class="aqua">
	<header 
		data-aqua="header"
		data-language="${language || ''}"
		class="aqua ${title ? '' : 'empty'}"
	>
		${title ? `<span class="overflow-wrapper">${title}</span>` : ''}
		<div data-aqua="toolbar" class="aqua">
			${create.icon('list', 'Toggle\nNumbering')}
			${create.icon('clipboard', 'Copy')}
		</div>
	</header>

	<div
		data-aqua="pre"
		data-language="${language || ''}"
		class="aqua language-${language || 'none'}"
	>${highlighted.trim()}</div>
</pre>`;
}
