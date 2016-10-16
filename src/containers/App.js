const { h, Component } = require('preact')

const Header = require('../components/Header')
const PrintHeader = require('../components/PrintHeader')
const Footer = require('../components/Footer')
const Introduction = require('../components/Introduction')
const Experience = require('../components/Experience')
const Skills = require('../components/Skills')
const Publications = require('../components/Publications')
const OpenSource = require('../components/OpenSource')

module.exports = class App extends Component {
  render () {
    const data = this.props['data'] || {}

    return (
      <div>
        <PrintHeader />

        <div className='container m-t-md'>
          <Header />

          <Introduction />
          <Skills data={data.skills} />
          <Experience data={data.experience} />
          <Publications data={data.publications} />
          <OpenSource />

          <Footer />
        </div>
      </div>
    )
  }
}
