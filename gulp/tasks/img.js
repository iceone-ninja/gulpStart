module.exports = function () {
  modules.gulp.task('img:dev', function(){
      return modules.gulp.src('src/static/img/*.{png,jpg,gif}')
          .pipe(modules.gulp.dest('build/static/img/'));
  });
  modules.gulp.task('img:build', function(){
    return modules.gulp.src('src/static/img/*.{png,jpg,gif}')
        .pipe(modules.gp.tinygpng('API_KEY'))
        .pipe(modules.gulp.dest('build/static/img/'));
  });
};
