global.$ = {
	//* Plugins
	gulp: require('gulp'),
	gul: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	sass: require('gulp-sass')(require('sass')),
	gulpSvgSprite: require('gulp-svg-sprite'),
	webPackStream: require('webpack-stream'),
	merge: require('gulp-merge-json'),
	gulpIf: require('gulp-if'),
	del: require('del'),
	fs: require('fs'),
	//* Configuration
	app: require('./config/app'),
};
//* Configuration
import app from './config/app.js';
import path from './config/path.js';
//* Tasks
import clear from './task/clear';
import clearFonts from './task/clearFonts';
import fonts from './task/fonts';
import fontsStyle from './task/fontStyle';
import html from './task/html';
import image from './task/image';
import js from './task/js';
import json from './task/json';
import pug from './task/pug';
import react from './task/react';
import scss from './task/scss';
import server from './task/server';
import sprite from './task/sprite';

const change = $.gulp.series(clearFonts, fonts, fontsStyle);
const changeReact = $.gulp.series(js, $.browserSync.reload);
const changejson = $.gulp.series(json, pug);
//* Observation
function reload(done) {
	$.browserSync.reload();
	done();
}
const watcher = () => {

	$.gulp.watch(path.js.watch, $.gulp.series(js, reload));
	$.gulp.watch(path.reactSass.watch, $.gulp.series(js, reload));
	$.gulp.watch(path.react.watch, react).on('all', $.browserSync.reload);
	$.gulp.watch(path.pug.watch, pug).on('all', $.browserSync.reload);
	$.gulp.watch(path.json.watch, changejson).on('all', $.browserSync.reload);
	$.gulp.watch(path.json.readFile, pug).on('all', $.browserSync.reload);
	$.gulp.watch(path.scss.watch, scss).on('all', $.browserSync.reload);
	$.gulp.watch(path.image.watch, image).on('all', $.browserSync.reload);
	$.gulp.watch(path.sprite.watch, sprite).on('all', $.browserSync.reload);
	$.gulp.watch(path.fonts.watch, fonts).on('all', $.browserSync.reload);
	$.gulp.watch(path.fontsStyle.watch, change).on('all', $.browserSync.reload);
};
const end = $.gulp.series(
	clear, json,
	$.gulp.parallel(pug, scss, js, react, image, sprite, fonts), fontsStyle
);
const dev = $.gulp.series(end, $.gulp.parallel(watcher, server));
//* Call back
export { clear, clearFonts, fonts, fontsStyle, html, image, js, json, pug, react, scss, sprite };
//* Assembly
export default app.isProd ? end : dev;