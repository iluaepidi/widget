"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            src: ["./src/**/*.js", "./tests/**/*.js", "./*.js"]
        },
        jsonlint: {
            src: ["src/**/*.json", "tests/**/*.json", "./*.json"]
        },
        jasmine: {
            widget: {
                src: [
                    'src/js/widgetStrings.js',
                    'src/js/widgetConf.js',
                    'src/js/widget.js'
                ],
                options: {
                    vendor: [
                        'node_modules/jasmine-ajax/lib/mock-ajax.js',
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
                    ],
                    specs: 'tests/widget.js',
                    keepRunner: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask("lint", "Apply jshint and jsonlint", ["eslint", "jsonlint"]);
};
