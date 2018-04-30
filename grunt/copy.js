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
  external: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/js/external/',
        src: ['*'],
        dest: '<%= paths.dist %>/js/external/',
      },
    ],
  },

};
