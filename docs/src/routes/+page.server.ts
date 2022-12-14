import MarkIt from 'markdown-it';
import { transform } from '@ignatiusmb/aqua/marker';
import { readdir, readFile } from 'fs/promises';

const marker = MarkIt({
	html: true,
	typographer: true,
	highlight(source, language) {
		const lines = source.split('\n');
		const title = source.match(/^~(.+)\n/) || [, ''];
		const dataset = { language, title: title[1], lineStart: 1 };
		if (lines[0][0] === '~') {
			const [, start] = lines[0].split('#');
			if (start) dataset.lineStart = +start;
		}
		const content = lines.slice(dataset.title ? 1 : 0, -1);
		return transform(content.join('\n'), dataset);
	},
});

const separators = /[\s\][!"#$%&'()*+,./:;<=>?@\\^_{|}~-]/g;
marker.renderer.rules.heading_open = (tokens, idx) => {
	const [token, text] = [tokens[idx], tokens[idx + 1].content];
	if (+token.tag.slice(-1) > 3) return `<${token.tag}>`;
	const title = text.toLowerCase().replace(separators, '-');
	const id = title.replace(/-+/g, '-').replace(/^-*(.+)-*$/, '$1');
	return `<${token.tag} id="${id}">`;
};

export const load: import('./$types').PageServerLoad = async () => {
	const docs = [];
	for (const filename of await readdir('content')) {
		if (filename.includes('draft')) continue;
		const [, i, slug] = filename.match(/(\d{2})-(\w+).md/) || [];
		const source = await readFile(`content/${filename}`, 'utf-8');
		docs.push({ index: i, slug, content: marker.render(source), path: `docs/content/${filename}` });
	}

	return { docs };
};
