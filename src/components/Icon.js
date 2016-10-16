import { h, Component } from 'preact'

export default class Icon extends Component {
  iconClass (style) {
    return 'icon' + (style ? ` icon--${style}` : '')
  }

  iconHref (icon) {
    return `images/icons.svg#icon-${icon}`
  }

  render () {
    return (
      <svg className={this.iconClass(this.props.style)}>
        <use xlinkHref={this.iconHref(this.props.name)}></use>
      </svg>
    )
  }
}
