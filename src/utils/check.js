function isElement(o) {
	return typeof HTMLElement === 'object'
		? o instanceof HTMLElement
		: o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string';
}

function isNode(o) {
	return typeof Node === 'object'
		? o instanceof Node
		: o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
}

export default { isElement, isNode };
