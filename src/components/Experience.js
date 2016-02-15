import React from 'react'
import fetch from 'isomorphic-fetch'

import ExperienceItem from './ExperienceItem'

const Experience = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  getInitialState () {
    return {
      items: this.props.data ? this.dataToExperienceItems(this.props.data) : ''
    }
  },

  componentDidMount () {
    fetch('data/experience.json')
      .then(response => response.json())
      .then(this.dataToExperienceItems)
      .then(items => this.setState({ items }))
  },

  dataToExperienceItems (data) {
    return data.results.map(props => {
      return <ExperienceItem key={props.name} {...props} />
    })
  },

  render () {
    return (
      <div id="experience" className="section">
        <h2 className="display-4 m-b-2 text-xs-center">Experience</h2>
        {this.state.items}
      </div>
    )
  }
})

export default Experience
