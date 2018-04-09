module.exports = function () {
    modules.gulp.task('jscripts:lib', function(){
        return modules.gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/slick-carousel/slick/slick.min.js'])
            .pipe(modules.gp.concat('libs.min.js'))
            .pipe(modules.gulp.dest('build/static/js'))
            .pipe(modules.bs.reload({
                stream:true
            }));
    });
    modules.gulp.task('jscripts', function(){
        return modules.gulp.src('src/static/js/main.js')
            .pipe(modules.gp.concat('main.min.js'))
            .pipe(modules.gulp.dest('build/static/js'))
            .pipe(modules.bs.reload({
                stream:true
            }));
    });


}
