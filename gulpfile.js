'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var karmaServer = require('karma').Server;


gulp.task('default', ['sasswatch','browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        port: 7000,
	});
});

gulp.task('nodemon', function () {
	return nodemon({
		// server file
		script: 'server.js'
	});
});

gulp.task('sass', function () {
	return gulp.src('./public/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/css/'));
});
	
gulp.task('sasswatch', function () {
	gulp.watch('./public/sass/*.scss', ['sass']);
});


gulp.task('test', function (done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});