module.exports = (grunt) => {
  grunt.initConfig({
    eslint: {
      src: ['./lib/**/*.js', './test/**/*.spec.js', './*.js']
    },
    mochaTest: {
      files: ['./test/*.spec.js']
    },
    mocha_istanbul: {
      coverage: {
        src: 'test',
        options: {
          mask: '**/*.spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('coverage', ['mocha_istanbul']);
  grunt.registerTask('build', ['lint', 'coverage']);
};
