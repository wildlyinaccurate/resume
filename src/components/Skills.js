import React from 'react'
import { compose, groupBy, map, mapObjIndexed, prop, values } from 'ramda'
import fetch from 'isomorphic-fetch'

import SkillItem from './SkillItem'

const Skills = React.createClass({
  getInitialState: function() {
    const data = this.props.data
    const skills = data ? this.dataToSkillItems(data) : ''

    return { skills }
  },

  componentDidMount: function() {
    fetch('data/skills.json')
      .then(response => response.json())
      .then(this.dataToSkillItems)
      .then(skills => {
        this.setState({ skills })
      })
  },

  dataToSkillItems: function(data) {
    return compose(
      values,
      this.mappedDataToSkillItems,
      groupBy(prop('category')),
      prop('results')
    )(data)
  },

  mappedDataToSkillItems: mapObjIndexed((skills, category) => {
    const items = map(props => {
      return <SkillItem key={props.name} {...props} />
    }, skills)

    return (
      <div key={category} className="col-xs-6 col-md-4 m-b-3">
        <h3>{category}</h3>
        {items}
      </div>
    )
  }),

  render: function() {
    return (
      <div id="skills" className="section text-xs-center">
        <h2 className="display-4 m-b-2">Skills</h2>

        <div className="row center-cols">
          {this.state.skills}
        </div>
      </div>
    )
  }
})

export default Skills
