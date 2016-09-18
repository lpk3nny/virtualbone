const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const jsmin = require('gulp-jsmin');
const changed = require('gulp-changed');

gulp.task('default', function () {
	gulp.start('less');
	gulp.start('js');
	gulp.start('test-js');

	gulp.watch('./test/less/**/*.less', ['less']);
	gulp.watch('./src/*.js', ['js']);
	gulp.watch('./test/js/**/*.js', ['test-js']);
});

gulp.task('less', function () {
	return gulp.src('./test/less/main.less')
		.pipe(less())
		.on('error', function () {
			this.emit('end');
		})
		.pipe(gulp.dest('./test/build/css/'));
});

gulp.task('js', function () {
	return gulp.src('./src/*.js')
		.pipe(changed('./dist/*.js'))
		.pipe(jsmin())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('test-js', function () {
	return gulp.src('./test/js/**/*.js')
		.pipe(changed('./test/build/js/'))
		.pipe(gulp.dest('./test/build/js/'));
});