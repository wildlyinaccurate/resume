const gulp = require('gulp')
const webpack = require('gulp-webpack')
const named = require('vinyl-named')

gulp.task('default', () => {
  return gulp.src('src/app.js')
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'))
})
