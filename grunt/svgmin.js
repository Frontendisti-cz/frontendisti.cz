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

};
