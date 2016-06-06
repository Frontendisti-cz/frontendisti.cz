'use strict';

module.exports = {

  fonts: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/fonts/',
        src: ['**/*'],
        dest: '<%= paths.dist %>/fonts/',
      },
    ],
  },
  stories: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.src %>/stories/',
        src: ['**/*.{png,jpg}'],
        dest: '<%= paths.dist %>/stories/',
      },
    ],
  },

};
