var sass = require('gulp-sass');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var addSrc = require('gulp-add-src');
var mainBowerFiles = require('main-bower-files');
var merge = require('merge-stream');

var addTasks = function(gulp) {
  var sassFiles = [
    './global/*.scss',
    './components/**/*.scss',
    './pages/**/*.scss'];

  var cssFiles = [
    './global/*.css',
    './components/**/*.css',
    './pages/**/*.css'];

  var jsFiles = [
    './global/client.js',
    './components/**/client.js',
    './pages/**/client.js',
    './global/client/*.js',
    './components/**/client/*.js',
    './pages/**/client/*.js'];

  gulp.task('sass', function () {
    var sassStream = gulp.src(sassFiles)
      .pipe(sass().on('error', sass.logError));

    var cssStream = gulp.src(cssFiles)
      .pipe(addSrc(mainBowerFiles()))
      .pipe(filter("*.css"));

    return merge(sassStream, cssStream)
      .pipe(concat('build.css'))
      .pipe(gulp.dest('./build'));
  });

  gulp.task('sass:watch', function () {
    gulp.watch(sassFiles, ['sass']);
  });

  gulp.task('js', function () {
    return gulp.src(jsFiles)
      .pipe(addSrc(mainBowerFiles()))
      .pipe(concat('build.js'))
      .pipe(gulp.dest('./build'));
  });

  gulp.task('js:watch', function () {
    gulp.watch(jsFiles, ['js']);
  });

  gulp.task('default', ['sass', 'sass:watch', 'js', 'js:watch']);
}

module.exports = {
    addTasks: addTasks
};
