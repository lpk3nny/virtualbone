var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
const changed = require('gulp-changed');

gulp.task('default', function () {
    gulp.start('less');
    gulp.start('js');

    gulp.watch('./test/less/**/*.less', ['less']);
    gulp.watch('./test/js/**/*.js', ['js']);
});

gulp.task('less', function () {
    return gulp.src('./test/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./test/build/css/'));
});

gulp.task('js', function () {
    return gulp.src('./test/js/**/*.js')
        .pipe(changed('./test/build/js/'))
        .pipe(gulp.dest('./test/build/js/'));
});