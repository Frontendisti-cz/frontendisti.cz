'use strict';

module.exports = {

  dev: {
    bsFiles: {
      src: [
        '<%= paths.dist %>/css/*.css',
        '<%= paths.dist %>/js/*.js',
        '<%= paths.dist %>/images/**/*',
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
