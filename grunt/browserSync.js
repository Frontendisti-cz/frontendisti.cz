'use strict';

module.exports = {

  dev: {
    bsFiles: {
      src: [
        '<%= paths.data %>/*.yml',
        '<%= paths.dist %>/css/*.css',
        '<%= paths.dist %>/images/**/*',
        '<%= paths.dist %>/media/**/*',
        '<%= paths.templates %>/**/*.html.twig',
      ],
    },
    options: {
      proxy: '<%= devUrl %>',
      browser: '<%= devBrowser %>',
      watchTask: true,
    },
  },

};
