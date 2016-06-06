'use strict';

module.exports = {

  dist: {
    options: {
      paths: '<%= paths.bower %>',
      sourceMap: true,
    },
    files: {
      '<%= paths.dist %>/css/main.css': '<%= paths.src %>/less/main.less',
    },
  },

};
