'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
        dist: {
            files: {
                'styles/css/style.css': 'styles/sass/style.scss',
            },
            options: { 
                style: 'expanded',
                require: ['susy', 'breakpoint'],
                sourcemap:false 
            }
        },
    },

    watch: {
        all: {
            files: ['*.html','*.php'],
            options: {
              livereload: true
            }
        },
        css: {
            files: '**/*.scss',
            tasks: ['sass'],
            options: {
              livereload: true,
            }
        },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};

