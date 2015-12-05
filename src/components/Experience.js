import React from 'react'
import $ from 'jquery'
import ExperienceItem from './ExperienceItem'

const Experience = React.createClass({
  getInitialState: function() {
      return {
        items: '',
      }
  },

  componentDidMount: function() {
    $.getJSON('data/experience.json')
      .then(this.dataToExperienceItems)
      .then((items) => {
        this.setState({ items })
      })
  },

  dataToExperienceItems: function(data) {
    return data.results.map((props) => {
      return <ExperienceItem {...props} />
    })
  },

  render: function() {
    return (
      <div id="experience" className="section">
        <h2 className="display-1 m-b-md text-center">Experience</h2>
        {this.state.items}
      </div>
    )
  }
})

export default Experience
