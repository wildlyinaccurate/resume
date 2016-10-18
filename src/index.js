const { h, render } = require('preact')

const App = require('./containers/app')

const container = document.getElementById('app-container')

render(<App />, container.parentNode, container)
