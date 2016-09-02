'use strict';

module.exports = {

  'build-css': [
    'less',
    'postcss',
  ],

  'build-images': [
    'svgmin',
    'imagemin',
  ],

  build: [
    'clean',
    'build-css',
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
