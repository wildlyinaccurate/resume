import gulp from 'gulp'
import webpack from 'gulp-webpack'
import sass from 'gulp-sass'
import named from 'vinyl-named'
import watch from 'gulp-watch'
import batch from 'gulp-batch'

gulp.task('default', ['build'])
gulp.task('build', ['sass', 'js'])

gulp.task('sass', () => {
  return gulp.src('styles/main.scss')
    .pipe(sass({ includePaths: 'node_modules' }).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
})

gulp.task('js', () => {
  return gulp.src('src/index.js')
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  gulp.start('build')

  watch('src/**/*.js', batch((events, done) => {
    gulp.start('js', done)
  }))

  watch('styles/**/*.scss', batch((events, done) => {
    gulp.start('sass', done)
  }))
})
