import React from 'react'
import fetch from 'isomorphic-fetch'

class Publications extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      publications: props.data ? this.dataToPublicationItems(props.data) : ''
    }
  }

  componentDidMount () {
    fetch('data/publications.json')
      .then(response => response.json())
      .then(this.dataToPublicationItems)
      .then(publications => {
        this.setState({ publications })
      })
  }

  dataToPublicationItems (data) {
    return data.results.map(props => {
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
        <a key={link.title} className='tag tag-success m-r-1/2' href={link.url}>{link.title}</a>
      )
    })
  }

  render () {
    return (
      <div id='publications' className='section'>
        <h2 className='display-4 m-b-2 text-xs-center'>Publications</h2>

        <div className='row'>
          {this.state.publications}
        </div>
      </div>
    )
  }
}

Publications.propTypes = {
  data: React.PropTypes.object
}

export default Publications
