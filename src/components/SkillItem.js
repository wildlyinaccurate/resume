import React, { Component } from 'react'
import Icon from './Icon'

class SkillItem extends Component {
  render() {
    return (
      <h5>
        <Icon name={this.props.icon} /> {this.props.name}
      </h5>
    )
  }
}

export default SkillItem
