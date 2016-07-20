var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var paths = {
	sass: './app/sass/*.scss'
}

gulp.task('sass', function() {
	return gulp.src('./app/sass/stopboard.scss')
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(rev())
		.pipe(gulp.dest('./build/stylesheets'))
		.pipe(rev.manifest('sassrev.json'))
		.pipe(gulp.dest('./rev'));

});

gulp.task('rev', function() {
	return gulp.src(['./rev/*.json', './app/*.html'])
		.pipe(revCollector())
		.pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'rev', 'watch'], function() {
	console.log('default');
});

gulp.task('pro', function() {
	console.log('pro');
});