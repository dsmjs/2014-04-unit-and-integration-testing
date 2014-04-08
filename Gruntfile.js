module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ember-template-compiler');
  grunt.loadNpmTasks('grunt-contrib-testem');

  grunt.initConfig({
    testem: {
      basic: {
        src: [
          "node_modules/qunit-special-blend/qunit-special-blend.js",
          "js/lib/deps.min.js",
          "node_modules/qunit-special-blend/run-qunit-special-blend.js"
        ],
        options: {
          framework: "qunit",
          launch_in_ci: ["PhantomJS"]
        }
      }
    },
    concat: {
      dist: {
          src: [
            'js/vendor/jquery/jquery.min.js',
            'js/vendor/handlebars/handlebars.js',
            'js/vendor/ember/ember.js',
            'js/app.js',
            'js/lib/tmpl.min.js'],
          dest: 'js/lib/deps.min.js'
      },
      test: {
          src: [
            'js/vendor/jquery/jquery.min.js',
            'js/vendor/handlebars/handlebars.js',
            'js/vendor/ember/ember.js',
            'js/vendor/jquery-mockjax/jquery.mockjax.js',
            'js/app.js',
            'js/lib/tmpl.min.js',
            'js/tests/*.js'],
          dest: 'js/lib/deps.min.js'
      }
    },
    emberhandlebars: {
        compile: {
            options: {
                templateName: function(sourceFile) {
                    var newSource = sourceFile.replace('js/templates/', '');
                    return newSource.replace('.handlebars', '');
                }
            },
            files: ['js/templates/*.handlebars'],
            dest: 'js/lib/tmpl.min.js'
        }
    }
  });

  grunt.task.registerTask('local', ['emberhandlebars', 'concat:dist']);
  grunt.task.registerTask('test', ['emberhandlebars', 'concat:test', 'testem:ci']);
}
