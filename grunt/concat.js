'use strict';

module.exports = {

  dist: {
    src: [
      '<%= paths.bower %>/picturefill/dist/picturefill.js',
      '<%= paths.bower %>/fastclick/lib/fastclick.js',
      '<%= paths.src %>/js/main.js',
      '<%= paths.src %>/js/map.js',
    ],
    dest: '<%= paths.temp %>/main.js',
  },

};
