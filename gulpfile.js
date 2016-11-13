var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('./app/**/*.js')
    .pipe(gulp.dest('build'));
});