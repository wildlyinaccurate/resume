import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return <h1>Hello, world!</h1>
  }
}

const store = createStore(x => x)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
)
