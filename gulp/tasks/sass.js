module.exports = function () {
    modules.gulp.task('sass', function(){
        return modules.gulp.src(['src/static/sass/*.sass','src/static/sass/*.scss'])
            .pipe(modules.gp.sourcemaps.init())
            .pipe(modules.gp.sass())
            .pipe(modules.gp.autoprefixer({
                browsers: ['last 2 versions']}))
        //     .on("error", notify.onError({
        //     message: "Error: <%= error.message %>",
        //     title: "Error on .sass"
        //   }))
            .pipe(modules.gp.csso())
            .pipe(modules.gp.sourcemaps.write())
            .pipe(modules.gulp.dest('build/static/css/'))
            .pipe(modules.bs.reload({
                stream:true
            }));
    });
}
