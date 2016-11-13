'use strict';

module.exports = {

  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/',
        src: ['media/**/*'],
        dest: '<%= paths.dist %>/',
      },
    ],
  },

};
