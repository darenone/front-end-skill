var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('less',function(){
	gulp.src('./src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./src/css/'));
});
gulp.task('watchless',function(){
	gulp.watch('./src/less/*.less',['less']);
});

gulp.task('connect',function(){
	connect.server({
		root: '../demo/src/tpl/',
		livereload: true
	});
});

gulp.task('watchHtml',function(){
	gulp.watch(['./src/tpl/**/*.html'],['html']);
});
gulp.task('html',function(){
	gulp.src('./src/tpl/**/*.html')
		.pipe(connect.reload());
});

gulp.task('default',['connect','watchHtml','watchless']);
