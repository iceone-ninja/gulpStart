'use strict'

global.modules = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

modules.path.tasks.forEach(function (tasksPath) {
    require(tasksPath)();
});

modules.gulp.task('default', modules.gulp.series(
    modules.gulp.parallel('pug','sass'),
    modules.gulp.parallel('watch','serve')

));