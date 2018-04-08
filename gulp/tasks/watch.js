module.exports = function () {
    modules.gulp.task('watch', function(){
        modules.gulp.watch('src/pug/**/*.pug', modules.gulp.series('pug')); //здесь можно через массив [] передать несколько путей
        modules.gulp.watch('src/static/**/*.sass', modules.gulp.series('sass'))
    
    });
}
