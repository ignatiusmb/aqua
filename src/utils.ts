export const create = {
	icon(name: 'clipboard' | 'list', tooltip: string) {
		const span = `<span data-aqua="tooltip" class="aqua">${tooltip}</span>`;
		return `<button data-aqua-toolbar="${name}" class="aqua">${span}</button>`;
	},
};

export function escape(source: string) {
	const symbols = { '&': '&amp;', '<': '&lt;', '>': '&gt;' } as const;
	return source.replace(/[&<>]/g, (s) => symbols[s as keyof typeof symbols]);
}
