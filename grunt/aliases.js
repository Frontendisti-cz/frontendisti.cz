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
    'build',
    'browserSync',
    'watch',
  ],

  default: [
    'build',
  ],

};
