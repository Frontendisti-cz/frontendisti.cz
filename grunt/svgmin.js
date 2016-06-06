'use strict';

module.exports = {

  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/images',
        src: ['**/*.svg'],
        dest: '<%= paths.dist %>/images/',
      },
    ],
  },
  stories: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/stories',
        src: ['**/*.svg'],
        dest: '<%= paths.dist %>/stories/',
      },
    ],
  },

};
