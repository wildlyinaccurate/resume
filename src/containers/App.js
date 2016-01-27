import React, { Component } from 'react'

import Header from '../components/Header'
import PrintHeader from '../components/PrintHeader'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import OpenSource from '../components/OpenSource'

export default class App extends Component {
  render() {
    const data = this.props.data || {}

    return (
      <div>
        <PrintHeader />

        <div className="container m-t-md">
          <Header />

          <Introduction />
          <Experience data={data.experience} />
          <Skills data={data.skills} />
          <Publications data={data.publications} />
          <OpenSource />

          <Footer />
        </div>
      </div>
    )
  }
}
