const fs = require('fs')
const del = require('del')
const gulp = require('gulp')
const header = require('gulp-header')
const clean = require('gulp-clean-css')
const uglify = require('gulp-uglify-es').default

const pkg = require('./package')
const banner = `/*! Aqua v${pkg.version} by @ignatiusmb - imbagus.com
 *  Copyright (c) ${new Date().getFullYear()} Ignatius Bagus
 *  MIT Licensed -> github.com/ignatiusmb/aqua
 *  aqua.imbagus.com
 */
`
console.log(pkg.version)
const paths = {
  styles: {
    src: './src/**/*.css',
    dst: './lib/'
  },
  scripts: {
    src: './src/**/*.js',
    dst: './lib/'
  }
}

const reset = () => del(['lib'])
const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(clean())
    .pipe(header(banner))
    .pipe(gulp.dest(paths.scripts.dst))
const scripts = () =>
  gulp
    .src(paths.scripts.src)
    .pipe(uglify())
    .pipe(header(banner))
    .pipe(gulp.dest(paths.scripts.dst))
const watch = () => {
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts)
}
const build = gulp.series(reset, gulp.parallel(styles, scripts))

exports.reset = reset
exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.build = build

exports.default = build
