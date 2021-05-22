const { homepage, version } = JSON.parse(require('fs').readFileSync('package.json'));

const banner = `/*! Aqua v${version} by @ignatiusmb - https://mauss.dev
 *  Copyright (c) ${new Date().getFullYear()} Ignatius Bagus
 *  MIT Licensed -> github.com/ignatiusmb/aqua
 *  ${homepage}
 */`;

module.exports = (context) => {
	console.info(`Compiling CSS - ${new Date().toUTCString()}`);
	const { options = {}, file = {} } = context;
	return {
		map: false,
		parser: options.parser,
		plugins: {
			'postcss-import': { root: file.dirname || '' },
			'postcss-preset-env': {
				autoprefixer: { cascade: false },
				features: { 'custom-properties': true },
			},
			cssnano: { preset: 'default' },
			'postcss-header': { banner },
		},
	};
};
