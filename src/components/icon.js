const { h } = require('preact')

const iconClass = style => 'icon' + (style ? ` icon--${style}` : '')
const iconHref = icon => `images/icons.svg#icon-${icon}`

module.exports = function Icon (props) {
  return (
    <svg className={iconClass(props['style'])}>
      {
        h('use', {
          'xlinkHref': iconHref(props['name'])
        })
      }
    </svg>
  )
}
