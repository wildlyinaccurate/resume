import React, { Component } from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'

export default class App extends Component {
  render() {
    return (
      <div className="container m-t-md">
        <Header/>
        <Introduction/>
      </div>
    )
  }
}
