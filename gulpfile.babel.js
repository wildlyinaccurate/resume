import gulp from 'gulp'
import webpack from 'gulp-webpack'
import named from 'vinyl-named'
import watch from 'gulp-watch'
import batch from 'gulp-batch'

gulp.task('default', ['build'])

gulp.task('build', () => {
  return gulp.src('src/index.js')
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  gulp.start('build')

  watch('src/**/*.js', batch((events, done) => {
    gulp.start('build', done)
  }))
})
