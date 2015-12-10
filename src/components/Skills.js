import React from 'react'
import { map, mapObjIndexed, prop, groupBy, values } from 'ramda'
import fetch from 'isomorphic-fetch'
import SkillItem from './SkillItem'

const Skills = React.createClass({
  getInitialState: function() {
    return {
      skills: ''
    }
  },

  componentDidMount: function() {
    fetch('data/skills.json')
      .then(response => response.json())
      .then(prop('results'))
      .then(groupBy(prop('category')))
      .then(this.toSkillItems)
      .then(values)
      .then((skills) => {
        this.setState({ skills })
      })
  },

  toSkillItems: mapObjIndexed((skills, category) => {
    const items = map((props) => {
      return <SkillItem key={props.name} {...props} />
    }, skills)

    return (
      <div key={category} className="col-xs-6 col-md-4 m-b-lg">
        <h3>{category}</h3>
        {items}
      </div>
    )
  }),

  render: function() {
    return (
      <div id="skills" className="section text-center">
        <h2 className="display-1 m-b-md text-center">Skills</h2>

        <div className="row">
          {this.state.skills}
        </div>
      </div>
    )
  }
})

export default Skills
