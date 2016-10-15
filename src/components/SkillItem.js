import React from 'react'

import Icon from './Icon'

class SkillItem extends React.Component {
  render () {
    return (
      <h5>
        <Icon name={this.props.icon} /> {this.props.name}
      </h5>
    )
  }
}

SkillItem.propTypes = {
  icon: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

export default SkillItem
