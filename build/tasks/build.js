var gulp = require('gulp');
var paths = require('../paths');

var changed = require('gulp-changed');
var rename = require("gulp-rename");
var less = require('gulp-less');
var fileinclude = require('gulp-file-include');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });
	
gulp.task('build-less', function () {
    var sourceFiles = [paths.lessmain];
    return gulp.src(sourceFiles)
    .pipe(less({
        plugins: [autoprefix]
    }))
    .pipe(gulp.dest(paths.output+ '/css'));
});	

/*gulp.task('build-less', function () {
    var sourceFiles = [paths.less ];
    return gulp.src(sourceFiles)
    .pipe(less({
        plugins: [autoprefix, cleancss]
    }))
        .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.root+ '/css'));
});	*/

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@root'
    }))
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-js', function () {
  return gulp.src(paths.js)
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(gulp.dest(paths.output+ '/script'));
});