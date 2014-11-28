module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      extend: {
        files: [
          {
            expand: true,
            cwd: 'less/extends/',
            src: ['*.less'],
            dest: 'css/',
            ext: '.css'
          }
        ]
      },
      mixins: {
        files: [
          {
            expand: true,
            cwd: 'less/mixins/',
            src: ['*.less'],
            dest: 'css/',
            ext: '.css'
          }
        ]
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        files: [
          // Each of the files in the src/ folder will be output to
          // the dist/ folder each with the extension .gz.js
          {
            expand: true,
            src: ['css/*.css'],
            dest: '', ext: '.css.gz'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Default task(s).
  grunt.registerTask('default', ['less:extend', 'less:mixins', 'compress']);

};