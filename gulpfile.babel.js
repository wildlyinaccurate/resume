const fs = require('fs')

const { __, compose, curry } = require('ramda')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const uncss = require('gulp-uncss')
const watch = require('gulp-watch')
const batch = require('gulp-batch')
const ghPages = require('gulp-gh-pages')

const render = require('preact-render-to-string')
const { h } = require('preact')
const App = require('./src/containers/app')

const readFileJSON = compose(
  JSON.parse,
  curry(fs.readFileSync)(__, 'utf-8')
)

gulp.task('default', ['build'])
gulp.task('build', ['static', 'sass', 'uncss', 'inline-css', 'copy', 'imagemin'])

gulp.task('sass', () => {
  return gulp.src('styles/main.scss')
    .pipe(sass({ includePaths: 'node_modules', outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist'))
})

gulp.task('uncss', ['sass', 'static'], () => {
  return gulp.src('dist/main.css')
    .pipe(uncss({
      html: ['dist/index.html'],
      ignore: [
        '.col-lg-6',
        '.col-12',
        '.mb-2',
        '.mx-2',
        '.float-right',
        '.star-count .icon',
        '.badge-primary',
        'small'
      ]
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('inline-css', ['uncss'], done => {
  fs.readFile('dist/index.html', 'utf-8', (_, html) => {
    fs.readFile('dist/main.css', 'utf-8', (_, styles) => {
      const inlined = html.replace(
        `<link rel="stylesheet" href="main.css">`,
        `<style>${styles}</style>`
      )

      fs.writeFile('dist/index.html', inlined, 'utf-8', () => {
        fs.unlink('dist/main.css', done)
      })
    })
  })
})

gulp.task('static', done => {
  fs.readFile('index.tmpl.html', 'utf-8', (_, template) => {
    const data = {
      experience: readFileJSON('data/experience.json'),
      skills: readFileJSON('data/skills.json'),
      publications: readFileJSON('data/publications.json')
    }

    const app = render(<App data={data} />)

    fs.writeFile('dist/index.html', template.replace('{{app}}', app), 'utf-8', done)
  })
})

gulp.task('imagemin', ['copy'], () => {
  const svgo = imagemin.svgo({
    plugins: [
      { cleanupIDs: false },
      { removeHiddenElems: false },
      { removeUselessDefs: false }
    ]
  })

  return gulp.src('dist/images/*')
    .pipe(imagemin([svgo, imagemin.optipng()]))
    .pipe(gulp.dest('dist/images'))
})

gulp.task('copy', () => {
  return gulp.src('{data/**,images/**,CNAME,favicon.ico}')
    .pipe(gulp.dest('dist'))
})

gulp.task('release', ['build'], () => {
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
