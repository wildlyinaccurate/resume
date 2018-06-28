const { h, Component } = require('preact')
const map = require('ramda/src/map')
const reverse = require('ramda/src/reverse')
const take = require('ramda/src/take')

const Repositories = require('../github/repositories')
const OpenSourceItem = require('./open-source-item')

const ACCESS_TOKEN = reverse('ff7cece3c58d2a457908136b35475cbdf708d3d6')

module.exports = class OpenSource extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: ''
    }
  }

  componentDidMount () {
    Repositories.get(ACCESS_TOKEN)
      .then(Repositories.sort('stargazers_count'))
      .then(take(8))
      .then(this.getRepositoryLanguages)
      .then(this.dataToOpenSourceItems)
      .then(items => this.setState({ items }))
  }

  getRepositoryLanguages (repositories) {
    return Promise.all(map(Repositories.getLanguage, repositories))
  }

  dataToOpenSourceItems (repositories) {
    return repositories.map(props => {
      return <OpenSourceItem {...props} />
    })
  }

  render () {
    return (
      <div id="open-source" className="section d-print-none">
        <h2 className="display-4 text-center">Open Source</h2>

        <p className="text-center">
          Below is a collection of my most popular open source work. You can visit <a href="https://github.com/wildlyinaccurate?tab=repositories">my GitHub profile</a> for a more complete picture of the open source work that I do.
        </p>

        <div className="row">
          {this.state.items}
        </div>
      </div>
    )
  }
}
