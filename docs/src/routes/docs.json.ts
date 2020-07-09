import { parseDir } from '../utils/parser';
import { splitAt } from '../utils/helper';

export function get(req, res) {
	const docs = parseDir('content', (data, content, filename) => {
		const [index, slug] = splitAt(2, filename.split('.')[0]);
		return { index, slug, ...data, content };
	}).sort((x, y) => x.index - y.index);

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(docs));
}
