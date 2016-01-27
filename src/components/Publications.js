import React from 'react'
import fetch from 'isomorphic-fetch'

const Publications = React.createClass({
  getInitialState: function() {
    const data = this.props.data
    const publications = data ? this.dataToPublicationItems(data) : ''

    return { publications }
  },

  componentDidMount: function() {
    fetch('data/publications.json')
      .then(response => response.json())
      .then(this.dataToPublicationItems)
      .then(publications => {
        this.setState({ publications })
      })
  },

  dataToPublicationItems: function(data) {
    return data.results.map(props => {
      return (
        <div key={props.title} className="col-sm-6">
          <h3>{props.title} ({props.year})</h3>
          <p>{props.summary}</p>
          <p>{this.publicationLinks(props.links)}</p>
        </div>
      )
    })
  },

  publicationLinks: function(links) {
    return links.map(link => {
      return (
        <a key={link.title} className="label label-success" href={link.url}>{link.title}</a>
      )
    })
  },

  render: function() {
    return (
      <div id="publications" className="section">
        <h2 className="display-4 m-b-2 text-xs-center">Publications</h2>

        <div className="row">
          {this.state.publications}
        </div>
      </div>
    )
  }
})

export default Publications
