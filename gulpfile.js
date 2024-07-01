const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
gulp.task('styles',()=>{
  return gulp.src('scss/*.scss')

  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('css'))



  
 
})

// todo: add watch task live reload
