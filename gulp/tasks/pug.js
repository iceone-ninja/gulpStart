module.exports = function () {
    modules.gulp.task('pug', function(){
        return modules.gulp.src('src/pug/pages/*.pug')
            .pipe(modules.gp.pug({
                pretty:true
            }))
            .pipe(modules.gulp.dest('build'))
            .on('end', modules.bs.reload);
    });
}
