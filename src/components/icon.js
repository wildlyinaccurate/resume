const { h, Component } = require('preact')

module.exports = class Icon extends Component {
  iconClass (style) {
    return 'icon' + (style ? ` icon--${style}` : '')
  }

  iconHref (icon) {
    return `images/icons.svg#icon-${icon}`
  }

  render () {
    return (
      <svg className={this.iconClass(this.props['style'])}>
        {
          h('use', {
            'xlinkHref': this.iconHref(this.props['name'])
          })
        }
      </svg>
    )
  }
}
