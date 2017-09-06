'use strict';

module.exports = {

  options: {
    processors: [
      require('pixrem')(),
      require('autoprefixer')({
        browsers: [
          '> 1%',
          'last 2 versions',
          'ie 11',
        ],
      }),
      require('cssnano')({
        autoprefixer: false,
        mergeRules: false,
        zindex: false,
      }),
    ],
  },
  dist: {
    src: '<%= paths.dist %>/css/main.css',
    dest: '<%= paths.dist %>/css/main.min.css',
  },

};
