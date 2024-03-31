const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const browserSync = require('browser-sync').create();

module.exports = {
	webpack: {
		mode: 'production',
		entry: {
			app: './#src/js/app.js',
			main: './#src/js/main.js'
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
		},
		output: {
			filename: '[name].min.js',
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.css$/,
					use: [
						"style-loader",
						"css-loader"
					],
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						"style-loader",
						"css-loader",
						'sass-loader'
					]
				},
			],
		},
	},

	browserSync: {
		server: './build',
		open: false
	}
};