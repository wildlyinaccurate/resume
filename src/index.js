const { h, render } = require('preact')

const App = require('./containers/app')

const container = document.getElementById('app-container')
const staticMarkup = container.childNodes[0]

render(<App />, container)

container.removeChild(staticMarkup)
