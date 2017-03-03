/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = function Grunt(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({

    clean: ['dist'],

    copy: {
      src_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['**/*', '!**/*.js', '!**/*.scss'],
        dest: 'dist',
      },
      pluginDef: {
        expand: true,
        src: ['README.md'],
        dest: 'dist',
      },
    },

    watch: {
      rebuild_all: {
        files: ['src/**/*'],
        tasks: ['default'],
        options: { spawn: false },
      },
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
      },
      dist: {
        options: {
          plugins: ['transform-es2015-modules-systemjs', 'transform-es2015-for-of'],
        },
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js'],
          dest: 'dist',
          ext: '.js',
        }],
      },
      distTestNoSystemJs: {
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js'],
          dest: 'dist/test',
          ext: '.js',
        }],
      },
      distTestsSpecsNoSystemJs: {
        files: [{
          expand: true,
          cwd: 'spec',
          src: ['**/*.js'],
          dest: 'dist/test/spec',
          ext: '.js',
        }],
      },
    },
    eslint: {
      target: ['**/*.js', '!node_modules/**/*.js'],
    },
  });

  grunt.registerTask('default', ['clean', 'eslint', 'copy:src_to_dist', 'copy:pluginDef', 'babel']);
  grunt.registerTask('validate', ['eslint']);
};
