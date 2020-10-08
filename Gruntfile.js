module.exports = configGrunt;

function configGrunt(grunt) {
    var buildDir = 'dist';
    var srcDir = './app';
    var vendorDir = 'dist/vendor'

    grunt.initConfig({
        copy: {
            // tarefa dist -> para buildar o projeto
            dist: {
                src: ['**/**.html'],
                cwd: srcDir,
                dest: buildDir,
                expand: true // recursividade entre as pastas
            },
            // tarefa all -> para fazer um cópida de todos os arquivos
            all: {
                src: ['**/**.*'],
                cwd: srcDir,
                dest: buildDir,
                expand: true
            },
            // tarefa vendor -> para copiar o angular
            vendor: {
                expand: true,
                cwd: './node_modules',
                src: [
                    'angular/angular.js',
                    // 'angular-route/angular-route.js',
                ],
                dest: vendorDir
            }
        },
        clean: {
            // tarefa para limpar a pasta dist
            dist: {
                src: ['dist']
            }
        },
        // cssmin -> para minificar os arquivos css
        cssmin: {
            dist: {
                expand: true,
                cwd: srcDir,
                src: ['**/*.css'],
                dest: buildDir,
                ext: '.min.css',
                extDot: 'last' // extenção começa após o último ponto
            }
        },
        // uglify -> para minificar os arquivos JavaScript
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: srcDir,
                    src: ['**/*.js'],
                    dest: buildDir,
                    ext: '.min.js',
                    extDot: 'last'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: buildDir
                }
            }
        },
        watch: {
            dev: {
                files: ['app/**/**.*'],
                tasks: ['dev'],
                options: {
                    spawn: false,
                    livereload: true //quando houver uma mudança ele automaticamente recarrega a página html
                }
            }
        }
    });

    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Registrar as tarefas
    grunt.registerTask(
        // Sempre tem a tarefa default. Quando executar somente "grunt", executará esta tarefa
        'default',
        'Padrão...',
        ['dev', 'connect', 'watch']
    );

    grunt.registerTask(
        'dev',
        'Tarefas apenas para desenvolvimento',
        ['clean', 'copy:all', 'copy:vendor']
    );

    grunt.registerTask(
        'build',
        'Builda o projeto...',
        ['clean', 'copy:dist', 'copy:vendor', 'cssmin', 'uglify']
    );
}
