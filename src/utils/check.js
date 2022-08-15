/** @param {any} o */
const isElement = (o) =>
	typeof HTMLElement === 'object'
		? o instanceof HTMLElement
		: o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string';

/** @param {any} o */
const isNode = (o) =>
	typeof Node === 'object'
		? o instanceof Node
		: o &&
		  typeof o === 'object' &&
		  typeof o.nodeType === 'number' &&
		  typeof o.nodeName === 'string';

export { isElement, isNode };
