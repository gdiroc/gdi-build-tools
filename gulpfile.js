var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('default', [ 'lint' ], function() {
  gulp.src('./app/**/*.js')
    .pipe(gulp.dest('build'));
});

gulp.task('lint', function () {
  gulp.src('./app/**/*.js')
    // Run linter and save results on the eslint object (doesn't output)
    .pipe(eslint())
    // Take the output and show it in the console
    .pipe(eslint.format())
    // If there are any errors, stop right here instead of continuing
    .pipe(eslint.failAfterError());
});

gulp.task('styles', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // format specified by gulp-sass README
    .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
  gulp.src('./app/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build'));
});