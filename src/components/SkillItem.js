import { h, Component } from 'preact'

import Icon from './Icon'

export default class SkillItem extends Component {
  render () {
    return (
      <h5>
        <Icon name={this.props.icon} /> {this.props.name}
      </h5>
    )
  }
}
