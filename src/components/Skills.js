import React from 'react'
import SkillItem from './SkillItem'

const Skills = React.createClass({
  getInitialState: function() {
    return {
      skills: ''
    }
  },

  componentDidMount: function() {
    $.getJSON('data/skills.json')
      .then(this.dataToSkillItems)
      .then((skills) => {
        this.setState({ skills })
      })
  },

  dataToSkillItems: function(data) {
    return data.results.map((props) => {
      return <SkillItem {...props} />
    })
  },

  render: function() {
    return (
      <div id="skills" className="text-center">
        <h2 className="display-1 m-b-md text-center">Skills</h2>

        <div className="row">
          {this.state.skills}
        </div>
      </div>
    )
  }
})

export default Skills
