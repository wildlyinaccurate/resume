const fs = require('fs')
const path = require('path')
const preact = require('preact')
const renderToString = require('preact-render-to-string')
const second = require('second')

const TEMPLATE_IN = path.join(path.resolve(__dirname, '../src/'), 'index.html')
const TEMPLATE_OUT = path.join(
  path.resolve(__dirname, '../dist/'),
  'index.html'
)

second.init({ VDom: preact, VDomServer: { renderToString } })

const Resume = require('./container/resume')

second.render(Resume, {}).then(renderedApp =>
  fs.promises
    .readFile(TEMPLATE_IN, 'utf8')
    .then(contents => contents.replace('{{body}}', renderedApp))
    .then(html => fs.promises.writeFile(TEMPLATE_OUT, html, 'utf8'))
)
