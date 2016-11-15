var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

gulp.task('default', [ 'styles', 'scripts', 'watch' ]);

gulp.task('watch', function () {
  gulp.watch('./app/**/*.js', [ 'scripts' ]);
  gulp.watch('./app/**/*.scss', [ 'styles' ]);
});

gulp.task('webserver', [ 'watch' ], function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('lint', function () {
  gulp.src('./app/**/*.js')
    // Run linter and save results on the eslint object (doesn't output)
    .pipe(eslint())
    // Take the output and show it in the console
    .pipe(eslint.format());
});

gulp.task('styles', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // format specified by gulp-sass README
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build'));
});

gulp.task('scripts', [ 'lint' ], function () {
  gulp.src('./app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build'));
});