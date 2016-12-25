const { h, Component } = require('preact')
const fetch = require('isomorphic-fetch')

module.exports = class Publications extends Component {
  constructor (props) {
    super(props)

    this.state = {
      publications: props.data ? this.dataToPublicationItems(props.data) : ''
    }
  }

  componentDidMount () {
    fetch('data/publications.json')
      .then(response => response.json())
      .then(items => this.dataToPublicationItems(items))
      .then(publications => {
        this.setState({ publications })
      })
  }

  dataToPublicationItems (data) {
    return data['results'].map(props => {
      return (
        <div key={props.title} className='col-sm-6'>
          <h3>{props.title} ({props.year})</h3>
          <p>{props.summary}</p>
          <p>{this.publicationLinks(props.links)}</p>
        </div>
      )
    })
  }

  publicationLinks (links) {
    return links.map(link => {
      return (
        <a key={link.title} className='tag tag-success mr-1/2' href={link.url}>{link.title}</a>
      )
    })
  }

  render () {
    return (
      <div id='publications' className='section'>
        <h2 className='display-4 mb-2 text-xs-center'>Publications</h2>

        <div className='row'>
          {this.state.publications}
        </div>
      </div>
    )
  }
}
