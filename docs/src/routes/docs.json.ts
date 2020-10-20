import type { Response } from 'express';
import { parseDir } from '../utils/parser';
import { splitAt } from '../utils/helper';
import { version } from '../package';

export function get(_, res: Response) {
	const docs = parseDir('content', (data, content, filename) => {
		const [index, slug] = splitAt(2, filename.split('.')[0]);
		const path = `docs/content/${index}-${slug}.md`;
		content = content.replace(/@VERSION/g, `@${version}`);
		return { index, slug, ...data, content, path };
	}).sort((x, y) => x.index - y.index);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(docs));
}
