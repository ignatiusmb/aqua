import code from './code';

const tsunami = () => {
	code.init();
};

const Aqua = { tsunami, code };

if (typeof window !== 'undefined') window.Aqua = Aqua;

export default Aqua;
