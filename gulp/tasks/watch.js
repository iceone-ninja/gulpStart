module.exports = function () {
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug')); //здесь можно через массив [] передать несколько путей
        $.gulp.watch('src/static/**/*.sass', $.gulp.series('sass'))
    
    });
}
