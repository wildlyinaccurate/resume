import React from 'react'
import fetch from 'isomorphic-fetch'

import ExperienceItem from './ExperienceItem'

const Experience = React.createClass({
  getInitialState: function() {
    const data = this.props.data
    const items = data ? this.dataToExperienceItems(data) : ''

    return { items }
  },

  componentDidMount: function() {
    fetch('data/experience.json')
      .then(response => response.json())
      .then(this.dataToExperienceItems)
      .then(items => this.setState({ items }))
  },

  dataToExperienceItems: function(data) {
    return data.results.map((props) => {
      return <ExperienceItem key={props.name} {...props} />
    })
  },

  render: function() {
    return (
      <div id="experience" className="section">
        <h2 className="display-4 m-b-2 text-xs-center">Experience</h2>
        {this.state.items}
      </div>
    )
  }
})

export default Experience
