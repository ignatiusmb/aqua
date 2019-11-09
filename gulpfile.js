const fs = require('fs')
const del = require('del')

const gulp = require('gulp')
const header = require('gulp-header')
const concat = require('gulp-concat')
const cssimport = require('gulp-cssimport')
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
    core: './src/core.css',
    main: ['./src/*.css', '!./src/core.css'],
    extra: ['./src/**/*.css', '!./src/*.css']
  },
  scripts: {
    main: './src/index.js',
    extra: ['./src/*/*.js', '!./src/*.js']
  },
  dst: './lib/'
}

const reset = () => del(['lib'])

const styles = done => {
  gulp // core style
    .src(paths.styles.core)
    .pipe(clean())
    .pipe(header(banner))
    .pipe(gulp.dest(paths.dst))

  gulp // main modules
    .src(paths.styles.main)
    .pipe(cssimport())
    .pipe(clean())
    .pipe(concat('main.css'))
    .pipe(header(banner))
    .pipe(gulp.dest(paths.dst))

  gulp // extra modules
    .src(paths.styles.extra)
    .pipe(cssimport())
    .pipe(clean())
    .pipe(header(banner))
    .pipe(gulp.dest(paths.dst))

  done()
}

const scripts = done => {
  gulp
    .src(paths.scripts.main)
    .pipe(header(banner))
    .pipe(gulp.dest(paths.dst))

  done()
}

const build = gulp.series(reset, gulp.parallel(styles, scripts))

exports.reset = reset
exports.styles = styles
exports.scripts = scripts
exports.build = build

exports.default = build
