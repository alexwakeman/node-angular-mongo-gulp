var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var paths = {
	scripts: ['app/js/app.js',
		'app/js/routes/**/*.js',
		'app/js/controllers/**/*.js',
		'app/js/directives/**/*.js',
		'app/js/filters/**/*.js',
		'app/js/services/**/*.js']
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'scripts'], function () {

	browserSync.init({
		server: "./app"
	});

	gulp.watch('./app/scss/**/*.scss', ['sass']);
	gulp.watch('./app/js/**/*.js', ['scripts']);
	gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

gulp.task('scripts', function () {
	return gulp.src(paths.scripts)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./app/js/concat'));
});

gulp.task('sass', function () {
	gulp.src('./app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/css'));
});

gulp.task('default', ['sass', 'scripts', 'serve']);