import React, { Component } from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Skills from '../components/Skills'

export default class App extends Component {
  render() {
    return (
      <div className="container m-t-md">
        <Header/>
        <Introduction/>
        <hr className="m-y-lg"/>
        <Experience/>
        <hr className="m-y-lg"/>
        <Skills/>
      </div>
    )
  }
}
