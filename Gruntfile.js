
module.exports = function (grunt) {

    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({pkg});

    grunt.loadNpmTasks('node-spritesheet');
    grunt.config('spritesheet', {
        compile: {
            options: {
                outputImage: 'dist/flags.png',
                outputCss: 'dist/_style.scss',
                selector: '.flag'
            },
            files: {'': 'assets/*.png'}
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.config('ngtemplates', {
        'monad.multilang.templates': {
            options: {
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                standalone: true,
                prefix: 'Monad/Multilang/'
            },
            cwd: 'src',
            src: ['**/*.html', '!index.html'],
            dest: 'lib/templates.js'
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.config('browserify', {
        monad: {
            src: 'src/index.js',
            dest: 'dist/monad-multilang.js',
            options: {
                transform: ['babelify'],
                standalone: 'monad',
                watch: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.config('shell', {
        lib: { command: 'npm run build' },
        clean: { command: 'rm -rf dist/* && rm -rf lib/*' }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.config('uglify', {
        js: {
            src: 'dist/monad-multilang.js',
            dest: 'dist/monad-multilang.min.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        lib: {
            files: ['src/**/*.js'],
            tasks: ['shell:lib']
        }
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['ngtemplates', 'spritesheet', 'shell:lib', 'browserify']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('prod', ['shell:clean', 'build', 'uglify']);
};

