const { h, render } = require('preact')
const Resume = require('./container/resume')

const container = document.getElementById('app')

render(<Resume />, container.parentNode, container)
