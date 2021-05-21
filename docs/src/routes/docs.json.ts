import type { RequestHandler } from '@sveltejs/kit';
import { version } from '@ignatiusmb/aqua/package.json';
import { forge, traverse } from 'marqua';

type Metadata = Record<'title', string>;
type Section = Record<'index' | 'slug' | 'content' | 'path', string>;

export const get: RequestHandler = () => ({
	body: traverse(
		'content',
		({ frontMatter, content, breadcrumb }) => {
			const [filename] = breadcrumb.slice(-1);
			if (filename.includes('draft')) return;
			const path = `docs/content/${filename}.md`;
			const [index, slug] = filename.split('.')[0].split('-');
			content = content.replace(/@VERSION/g, `@${version}`);
			return { index, slug, ...frontMatter, content, path };
		},
		forge.types<Metadata, Section & Metadata>()
	),
});
