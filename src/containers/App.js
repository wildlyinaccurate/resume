import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import OpenSource from '../components/OpenSource'

export default class App extends Component {
  render() {
    return (
      <div className="container m-t-md">
        <Header />

        <Introduction />
        <Experience />
        <Skills />
        <Publications />
        <OpenSource username="wildlyinaccurate" />

        <Footer />
      </div>
    )
  }
}
