import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import './prism-svelte';

const langMap = {
	bash: 'bash',
	css: 'css',
	dart: 'dart',
	docker: 'docker',
	html: 'markup',
	javascript: 'javascript',
	js: 'javascript',
	sv: 'svelte',
	svelte: 'svelte',
	yaml: 'yaml',
};

function highlight(source, langInput) {
	const lang = langMap[langInput] || '';
	return lang
		? Prism.highlight(source, Prism.languages[lang], langInput)
		: source.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

highlight.all = () => Prism.highlightAll();

export default highlight;
