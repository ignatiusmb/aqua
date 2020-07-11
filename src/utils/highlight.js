import Prism from 'prismjs';
import 'prismjs/components/prism-apacheconf';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';
import './prism-svelte';

const langMap = {
	bash: 'bash',
	c: 'c',
	'c++': 'cpp',
	cpp: 'cpp',
	css: 'css',
	dart: 'dart',
	docker: 'docker',
	dockerfile: 'docker',
	htaccess: 'apacheconf',
	html: 'markup',
	java: 'java',
	javascript: 'javascript',
	json: 'json',
	js: 'javascript',
	py: 'python',
	python: 'python',
	sv: 'svelte',
	svelte: 'svelte',
	sql: 'sql',
	ts: 'typescript',
	typescript: 'typescript',
	yaml: 'yaml',
	yml: 'yaml',
};

function highlight(source, langInput) {
	const lang = langInput ? langMap[langInput.toLowerCase()] || '' : '';
	return lang
		? Prism.highlight(source, Prism.languages[lang], langInput)
		: source.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

highlight.all = () => Prism.highlightAll();

export default highlight;
