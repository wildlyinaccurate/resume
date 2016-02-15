import React from 'react'

import Icon from './Icon'

const SkillItem = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <h5>
        <Icon name={this.props.icon} /> {this.props.name}
      </h5>
    )
  }
})

export default SkillItem
