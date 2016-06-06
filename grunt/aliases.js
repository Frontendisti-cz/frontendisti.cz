'use strict';

module.exports = {

  'test-js': [
    'jshint',
    'jscs',
  ],

  test: [
    'test-js',
  ],

  'build-css': [
    'less',
    'postcss',
  ],

  'build-js': [
    'concat',
    'uglify',
  ],

  'build-images': [
    'svgmin',
    'imagemin',
  ],

  build: [
    'clean',
    'build-css',
    'build-js',
    'build-images',
    'copy',
  ],

  dev: [
    'test',
    'build',
    'browserSync',
    'watch',
  ],

  default: [
    'test',
    'build',
  ],

};
