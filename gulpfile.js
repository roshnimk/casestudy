'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('./client/sass/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/sass/**/*.scss', ['sass']);
});

gulp.task('default', [
  'sass',
  'sass:watch'
]);
