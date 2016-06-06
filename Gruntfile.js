'use strict';

module.exports = function (grunt) {

  var options = {

    // External configs
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    paths: {
      src: 'resources',
      dist: 'web',
      bower: 'bower_components',
      templates: 'src/templates',
      temp: '.tmp',
    },

    // Development
    devUrl: 'frontendisti.cz.localhost',
    devBrowser: 'google chrome',

  };

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { config: options });

  // See the `grunt/` directory for individual task configurations.
};
