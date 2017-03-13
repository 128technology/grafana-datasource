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
        expand: false,
        src: 'SUMMARY.md',
        dest: 'dist/README.md',
      },
    },

    watch: {
      rebuild_all: {
        files: ['src/**/*'],
        tasks: ['build'],
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
          cwd: 'tests',
          src: ['**/*.js'],
          dest: 'dist/test/tests',
          ext: '.js',
        }],
      },
    },

    eslint: {
      target: ['**/*.js', '!node_modules/**/*.js', '!dist/**/*.js'],
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['dist/test/tests/test-main.js', 'dist/test/tests/*-test.js'],
      },
    },
  });

  grunt.registerTask('default', ['clean', 'eslint', 'copy:src_to_dist', 'copy:pluginDef', 'babel', 'mochaTest']);
  grunt.registerTask('build', ['clean', 'copy:src_to_dist', 'copy:pluginDef', 'babel']);
  grunt.registerTask('validate', ['clean', 'eslint', 'babel', 'mochaTest']);
};
