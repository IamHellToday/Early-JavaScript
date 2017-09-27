
module.exports = function(grunt) {
    
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
    },

    watch: {
        scripts: {
            files: ['sass/*.sass'],
            tasks: ['sass', 'autoprefixer'],
            options: {
                spawn: false
            }
        } 
    },

    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    'css/*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }
    },

    jshint: {
        all: ['js/*.js']
    },

    autoprefixer: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        your_target: {
              src: 
              'css/style.css',
              dest:
              'css/dist/style.css'
        },
    },       
  })
  
  // Load the plugins tasks 
//   kompilacja sass->css
grunt.loadNpmTasks('grunt-sass');
//   Optymalizacja obrazków
grunt.loadNpmTasks('grunt-contrib-imagemin');
//   Auto zapis
grunt.loadNpmTasks('grunt-contrib-watch');
//  Web Sync
grunt.loadNpmTasks('grunt-browser-sync');
// Jshint
grunt.loadNpmTasks('grunt-contrib-jshint');
// Autoprefixer
grunt.loadNpmTasks('grunt-autoprefixer');
  // Default task(s).
grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'jshint', 'autoprefixer', 'watch']);
};