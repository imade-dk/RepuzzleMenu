var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';

//var appRoot = '.';
//var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  js:  'js/**/*.js',
  html: appRoot + '/**/*.html',
  css: appRoot + '**/*.css',
  less: 'less/**/*.less',
  lessmain: 'less/**/main.less',
  output: outputRoot
};