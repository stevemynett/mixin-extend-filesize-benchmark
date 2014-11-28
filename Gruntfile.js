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
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less:extend', 'less:mixins']);

};