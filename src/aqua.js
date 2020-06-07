import code from './code';
import form from './form';

const tsunami = () => {
	code.init();
	form.init();
};

const Aqua = { tsunami, code, form };

if (typeof window !== 'undefined') window.Aqua = Aqua;

export default Aqua;
