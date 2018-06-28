const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

gulp.task('minify-css', () => {
  return gulp.src(['assets/css/styles.css', 'assets/css/syntax.css'])
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest('assets/dist'));
});

gulp.task('minify-js', function() {
  gulp.src('node_modules/highlight.js/lib/highlight.js')
  .pipe(minify({
    ext:{
      min:'.min.js'
    },
    noSource: true
  }))
  .pipe(gulp.dest('assets/dist'))
});

gulp.task('default', ['minify-css', 'minify-js']);