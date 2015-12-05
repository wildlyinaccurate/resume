import React from 'react'
import $ from 'jquery'

const Publications = React.createClass({
  getInitialState: function() {
    return {
      publications: '',
    }
  },

  componentDidMount: function() {
    $.getJSON('data/publications.json')
      .then(this.dataToPublicationItems)
      .then((publications) => {
        this.setState({ publications })
      })
  },

  dataToPublicationItems: function(data) {
    return data.results.map((props) => {
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
    return links.map((link) => {
      return (
        <a key={link.title} className="label label-success" href={link.url}>{link.title}</a>
      )
    })
  },

  render: function() {
    return (
      <div id="publications" className="section">
        <h2 className="display-1 m-b-md text-center">Publications</h2>

        <div className="row">
          {this.state.publications}
        </div>
      </div>
    )
  }
})

export default Publications
