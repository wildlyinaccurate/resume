const gulp = require('gulp')
const webpack = require('gulp-webpack')

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'))
})
