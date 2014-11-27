module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      less: {
        extend: {
          src: 'less/extend.less',
          dest: 'css/extend.css'
        },
        mixin: {
          src: 'less/mixin.less',
          dest: 'css/mixin.css'
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less:extend', 'less:mixin']);

};