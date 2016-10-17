const { h } = require('preact')

const Icon = require('./icon')

module.exports = function SkillItem (props) {
  return (
    <h5>
      <Icon name={props['icon']} /> {props['name']}
    </h5>
  )
}
