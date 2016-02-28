import React from 'react'
import fetch from 'isomorphic-fetch'

import compose from 'ramda/src/compose'
import groupBy from 'ramda/src/groupBy'
import map from 'ramda/src/map'
import mapObjIndexed from 'ramda/src/mapObjIndexed'
import prop from 'ramda/src/prop'
import values from 'ramda/src/values'

import SkillItem from './SkillItem'

const Skills = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  getInitialState () {
    return {
      skills: this.props.data ? this.dataToSkillItems(this.props.data) : ''
    }
  },

  componentDidMount () {
    fetch('data/skills.json')
      .then(response => response.json())
      .then(this.dataToSkillItems)
      .then(skills => {
        this.setState({ skills })
      })
  },

  dataToSkillItems (data) {
    return compose(
      values,
      this.mappedDataToSkillItems,
      groupBy(prop('category')),
      prop('results')
    )(data)
  },

  mappedDataToSkillItems: mapObjIndexed((skills, category) => {
    const items = map(data => {
      return <SkillItem key={data.name} {...data} />
    }, skills)

    return (
      <div key={category} className="col-xs-6 col-md-4 m-b-3">
        <h3>{category}</h3>
        {items}
      </div>
    )
  }),

  render () {
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
