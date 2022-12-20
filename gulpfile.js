'use strict';
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

gulp.task('nunjucks', function () {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src('pages/**/*.+(html|njk)')
      // Renders template with nunjucks
      .pipe(
        data(function () {
          return require('./theoryArticles/whatIsAPanagram.json');
        })
      )
      .pipe(
        data(function () {
          return require('./theoryArticles/howDoesAPanagramStart.json');
        })
      )
      .pipe(
        data(function () {
          return require('./theoryArticles/panagramAndFlowState.json');
        })
      )
      .pipe(
        data(function () {
          return require('./theoryArticles/panagramExtensionsGTD.json');
        })
      )
      .pipe(
        data(function () {
          return require('./theoryArticles/panagramsAndTheClassicRomanticSplit.json');
        })
      )
      .pipe(
        data(function () {
          return require('./theoryArticles/panagramWork.json');
        })
      )
      .pipe(
        nunjucksRender({
          path: ['templates'],
        })
      )
      // output files in main folder
      .pipe(gulp.dest('./'))
  );
});

exports.default = defaultTask;
