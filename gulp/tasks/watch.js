module.exports = function () {
    modules.gulp.task('watch', function(){
        modules.gulp.watch('src/pug/**/*.pug', modules.gulp.series('pug')); //здесь можно через массив [] передать несколько путей
        modules.gulp.watch('src/static/**/*.sass', modules.gulp.series('sass'))
        modules.gulp.watch('src/static/**/*.js', modules.gulp.series('jscripts'))
        modules.gulp.watch('src/static/img/*', modules.gulp.series('img:dev'))

    });
}
