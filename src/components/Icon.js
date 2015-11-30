import React, { Component } from 'react'

class Icon extends Component {
  iconHref(icon) {
    return `icons.svg#icon-${icon}`
  }

  render() {
    return (
      <svg className="icon">
        <use xlinkHref={this.iconHref(this.props.name)}></use>
      </svg>
    )
  }
}

export default Icon
