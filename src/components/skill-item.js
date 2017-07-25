const { h } = require('preact')

module.exports = function SkillItem (props) {
  return (
    <h5>{props['name']}</h5>
  )
}
