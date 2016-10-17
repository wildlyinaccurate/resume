const { h, Component } = require('preact')

const Header = require('../components/header')
const PrintHeader = require('../components/print-header')
const Footer = require('../components/footer')
const Introduction = require('../components/introduction')
const Experience = require('../components/experience')
const Skills = require('../components/skills')
const Publications = require('../components/publications')
const OpenSource = require('../components/open-source')

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
