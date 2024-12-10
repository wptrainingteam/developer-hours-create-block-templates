const { join } = require('path');

module.exports = {
	defaultValues: {
		slug: 'editor-extension',
		textdomain: 'editor-extension',
		version: '0.1.0',
		pluginURI: 'https://www.nickdiego.com',
		author: 'Nick Diego',
		title: 'Editor Extension',
		description: 'An Editor extension plugin.',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		customScripts: {
			'lint:js': 'wp-scripts lint-js ./src',
			'lint:js:fix': 'wp-scripts lint-js ./src --fix',
			'update-pot': 'wp i18n make-pot . languages/editor-extension.pot --exclude=src',
		},
		// Needed to remove the empty `.js` files generated by webpack.
		npmDevDependencies: ['webpack-remove-empty-scripts'],
	},
	pluginTemplatesPath: join( __dirname, 'plugin' ),
	blockTemplatesPath: join( __dirname, 'src' ),
};