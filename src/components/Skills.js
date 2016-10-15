import React from 'react'
import fetch from 'isomorphic-fetch'

import compose from 'ramda/src/compose'
import groupBy from 'ramda/src/groupBy'
import map from 'ramda/src/map'
import mapObjIndexed from 'ramda/src/mapObjIndexed'
import prop from 'ramda/src/prop'
import values from 'ramda/src/values'

import SkillItem from './SkillItem'

const mappedDataToSkillItems = mapObjIndexed((skills, category) => {
  const items = map(data => {
    return <SkillItem key={data.name} {...data} />
  }, skills)

  return (
    <div key={category} className='col-xs-6 col-md-4 m-b-3'>
      <h3>{category}</h3>
      {items}
    </div>
  )
})

export default class Skills extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      skills: props.data ? this.dataToSkillItems(props.data) : ''
    }
  }

  componentDidMount () {
    fetch('data/skills.json')
      .then(response => response.json())
      .then(this.dataToSkillItems)
      .then(skills => {
        this.setState({ skills })
      })
  }

  dataToSkillItems (data) {
    return compose(
      values,
      mappedDataToSkillItems,
      groupBy(prop('category')),
      prop('results')
    )(data)
  }

  render () {
    return (
      <div id='skills' className='section text-xs-center'>
        <h2 className='display-4 m-b-2'>Skills</h2>

        <div className='row center-cols'>
          {this.state.skills}
        </div>
      </div>
    )
  }
}

Skills.propTypes = {
  data: React.PropTypes.object
}
