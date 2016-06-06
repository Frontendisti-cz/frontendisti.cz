'use strict';

module.exports = {

  src: [
    '<%= paths.src %>/js/**/*.js',
    'grunt/*.js',
    'Gruntfile.js',
  ],
  options: {
    config: '.jscsrc',
  },

};
