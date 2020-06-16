import callbacks from './utils/callbacks';

const Aqua = {
	code: { cbs: (name) => callbacks.code(name) },
};

if (typeof window !== 'undefined') window.Aqua = Aqua;

export default Aqua;
