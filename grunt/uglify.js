'use strict';

module.exports = {

  dist: {
    files: {
      '<%= paths.dist %>/js/main.min.js': '<%= paths.temp %>/main.js',
    },
  },

};
