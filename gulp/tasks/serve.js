module.exports = function () {
    modules.gulp.task('serve', function() {
        modules.bs.init({
            server: {
                baseDir: "./build"
            }
        });
    });
}
