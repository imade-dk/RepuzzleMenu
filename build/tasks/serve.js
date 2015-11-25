var gulp = require('gulp');
var browserSync = require('browser-sync');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9001 ['build'],
gulp.task('serve',  function(done) {
  browserSync({
    open: false,
    port: 9001,
    server: {
      baseDir: ['./dist'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});