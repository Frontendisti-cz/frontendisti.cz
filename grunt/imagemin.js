'use strict';

module.exports = {

  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/images/',
        src: ['**/*.{png,jpg}'],
        dest: '<%= paths.dist %>/images/',
      },
    ],
  },

};
