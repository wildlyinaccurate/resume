import React from 'react'
import fetch from 'isomorphic-fetch'

import ExperienceItem from './ExperienceItem'

export default class Experience extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      items: props.data ? this.dataToExperienceItems(props.data) : ''
    }
  }

  componentDidMount () {
    fetch('data/experience.json')
      .then(response => response.json())
      .then(this.dataToExperienceItems)
      .then(items => this.setState({ items }))
  }

  dataToExperienceItems (data) {
    return data.results.map(props => {
      return <ExperienceItem key={props.name} {...props} />
    })
  }

  render () {
    return (
      <div id='experience' className='section'>
        <h2 className='display-4 m-b-2 text-xs-center'>Experience</h2>
        {this.state.items}
      </div>
    )
  }
}

Experience.propTypes = {
  data: React.PropTypes.object
}
