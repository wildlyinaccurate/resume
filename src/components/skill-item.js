const { h, Component } = require('preact')

const Icon = require('./icon')

module.exports = class SkillItem extends Component {
  render () {
    return (
      <h5>
        <Icon name={this.props['icon']} /> {this.props['name']}
      </h5>
    )
  }
}
