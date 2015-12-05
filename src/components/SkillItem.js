import React, { Component } from 'react'
import Icon from './Icon'

class SkillItem extends Component {
  render() {
    return (
      <h3 className="col-xs-6 col-md-4">
        <Icon name={this.props.icon} /> {this.props.name}
      </h3>
    )
  }
}

export default SkillItem
