'use strict';

module.exports = {

  less: {
    files: ['<%= paths.src %>/less/**/*.less'],
    tasks: ['build-css'],
  },
  images: {
    files: ['<%= paths.src %>/images/**/*'],
    tasks: ['build-images'],
  },

};
