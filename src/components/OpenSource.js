import React from 'react'
import fetch from 'isomorphic-fetch'

const OpenSource = React.createClass({
  getInitialState: function() {
    return {
      items: '',
    }
  },

  componentDidMount: function() {
    fetch('data/open-source.json')
      .then(response => response.json())
      .then(this.dataToOpenSourceItems)
      .then(items => this.setState({ items }))
  },

  dataToOpenSourceItems: function(data) {
    return data.results.map((props) => {
      return <OpenSourceItem key={props.name} {...props} />
    })
  },

  render: function() {
    return (
      <div id="open-source" className="section">
        <h2 className="display-1 m-b-md text-center">Open Source</h2>
        {this.state.items}
      </div>
    )
  }
})

export default OpenSource
