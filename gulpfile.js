let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let rename = require('gulp-rename');

gulp.task('minify-css', () => {
  return gulp.src(['assets/css/styles.css', 'assets/css/syntax.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('assets/dist'));
});