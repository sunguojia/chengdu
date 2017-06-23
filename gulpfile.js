var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-clean-css');
var minifyJs = require('gulp-uglify');
var concat = require('gulp-concat');
//压缩任务
gulp.task('htmltask', function() {
	gulp.src('*.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist'))
});

gulp.task('csstask', function() {
	gulp.src('./css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('jstask', function() {
	gulp.src('./js/*.js')
		.pipe(concat('all.js'))
		.pipe(minifyJs())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
	gulp.watch('*.html', ['htmltask'])
	gulp.watch('./css/*.css', ['csstask'])
	gulp.watch('./js/*.js', ['jstask'])

})
