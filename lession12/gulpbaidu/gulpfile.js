var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var cmdPack = require('gulp-cmd-pack');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var paths = {
	sass: './app/sass/*.scss',
	javascript: './app/javascript/*.js',
	html: './app/*.html'
}

gulp.task('sassimagemin', function() {
	return gulp.src('./app/sass/images/*.{png,jpg,gif,ico}')
		.pipe(imagemin())
		.pipe(rev())
		.pipe(gulp.dest('./build/stylesheets/images'))
		.pipe(rev.manifest('sassimages.json'))
		.pipe(gulp.dest('./sassrev'));
});

gulp.task('sass', function() {
	return gulp.src('./app/sass/style.scss')
		.pipe(sass())
		.pipe(minifycss())
		.pipe(rev())
		.pipe(gulp.dest('./build/stylesheets'))
		.pipe(rev.manifest('css.json'))
		.pipe(gulp.dest('./rev'));
});

gulp.task('sassrev', function() {
	return gulp.src(['./sassrev/*.json', './build/stylesheets/*.css'])
		.pipe(revCollector())
		.pipe(gulp.dest('./build/stylesheets'));
});



gulp.task('seajs', function() {
	return gulp.src(['./app/javascript/sea.js', './app/javascript/html5.js'])
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('./build/javascript'))
		.pipe(rev.manifest('seajs.json'))
		.pipe(gulp.dest('./rev'));
});

gulp.task('seajsPack', function() {
	return gulp.src('./app/javascript/main.js')
		.pipe(cmdPack({
			mainId: 'main',
			base: './app/javascript'
		}))
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('./build/javascript'))
		.pipe(rev.manifest('seajspack.json'))
		.pipe(gulp.dest('./rev'));
});


gulp.task('imagemin', function() {
	return gulp.src('./app/images/*.{png,jpg,gif,ico}')
		.pipe(imagemin())
		.pipe(rev())
		.pipe(gulp.dest('./build/images'))
		.pipe(rev.manifest('images.json'))
		.pipe(gulp.dest('./rev'));
});



gulp.task('rev', function() {
	return gulp.src(['./rev/*.json', './app/*.html'])
		.pipe(revCollector())
		.pipe(gulp.dest('./build'));
});



gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.javascript, ['seajs', 'seajsPack']);
	gulp.watch(paths.html, ['sass', 'seajs', 'seajsPack'])

});


gulp.task('default', ['sassimagemin', 'sass', 'sassrev', 'seajs', 'seajsPack', 'imagemin', 'rev', 'watch']);