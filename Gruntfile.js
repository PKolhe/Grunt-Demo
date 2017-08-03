module.exports = function(grunt) {

    /*grunt.registerTask('default', function(){
        grunt.log.write('This log is pointless...just for demo');
    });*/

    //Configure main projects settings
    grunt.initConfig({

        //Basic Settings & Info about our Plugins
        pkg:grunt.file.readJSON('package.json'),

        // Name of Plugin ( Plugin name without 'grunt-contrib-')
        cssmin:{
            combine: {
                files: {
                    'css/main.css':['css/content.css','css/sidebar.css']
                }
            }
        },

        //uglify the js file into min file
        uglify: {
            dist: {
                files: {
                    'js/toggle.min.js':['js/toggle.js']
                }
            }
        },

        // JSHint errors/warnings identifications in js files
        jshint: {
            files:['Gruntfile.js', 'js/**/*.js'],
        }

    });

    // Loading the Plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //Register the Task
    grunt.registerTask('default', ['cssmin', 'uglify', 'jshint']);

};