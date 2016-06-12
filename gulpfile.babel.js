import fs from 'fs'

import { __, compose, curry } from 'ramda'
import gulp from 'gulp'
import gutil from 'gulp-util'
import browserify from 'browserify'
import uglify from 'gulp-uglify'
import imagemin, * as im from 'gulp-imagemin'
import eslint from 'gulp-eslint'
import sass from 'gulp-sass'
import uncss from 'gulp-uncss'
import source from 'vinyl-source-stream'
import watch from 'gulp-watch'
import batch from 'gulp-batch'
import ghPages from 'gulp-gh-pages'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/containers/App'

const readFileJSON = compose(
  JSON.parse,
  curry(fs.readFileSync)(__, 'utf-8')
)

gulp.task('default', ['build'])
gulp.task('build', ['lint', 'sass', 'uncss', 'js', 'minify', 'static', 'copy', 'imagemin'])

gulp.task('sass', () => {
  return gulp.src('styles/main.scss')
    .pipe(sass({ includePaths: 'node_modules', outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
})

gulp.task('uncss', ['sass'], () => {
  return gulp.src('dist/main.css')
    .pipe(uncss({
      html: ['dist/index.html'],
      ignore: [
        '.star-count .icon',
        '.pull-xs-right',
        '.col-xs-12',
        '.col-lg-6',
        '.m-b-2',
        'small'
      ]
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js', 'gulpfile.babel.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('js', () => {
  const b = browserify('src/index.js', {
    transform: ['babelify']
  })

  return b.bundle()
    .on('error', error => gutil.log('Browserify Error:', error.toString()))
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('minify', ['js'], () => {
  return gulp.src('dist/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('static', done => {
  fs.readFile('index.tmpl.html', 'utf-8', (_, template) => {
    const data = {
      experience: readFileJSON('data/experience.json'),
      skills: readFileJSON('data/skills.json'),
      publications: readFileJSON('data/publications.json')
    }

    const app = ReactDOMServer.renderToString(<App data={data} />)

    fs.writeFile('dist/index.html', template.replace('{{app}}', app), 'utf-8', done)
  })
})

gulp.task('imagemin', ['copy'], () => {
  const svgo = im.svgo({
    plugins: [
      { cleanupIDs: false },
      { removeHiddenElems: false },
      { removeUselessDefs: false }
    ]
  })

  return gulp.src('dist/images/*')
    .pipe(imagemin([svgo, im.optipng()]))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('copy', () => {
  return gulp.src('{data/**,images/**,CNAME,favicon.ico}')
    .pipe(gulp.dest('dist'))
})

gulp.task('apply-production-env', () => {
  process.env.NODE_ENV = 'production'
})

gulp.task('release', ['apply-production-env', 'build'], () => {
  return gulp.src('dist/**/*')
    .pipe(ghPages())
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
