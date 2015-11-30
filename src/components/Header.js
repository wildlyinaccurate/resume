import React, { Component } from 'react'

import Icon from './Icon'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Joseph Wynn</a>

        <div className="pull-right">
          <a className="social-media-link" href="https://github.com/wildlyinaccurate">
            <Icon name="github"/>
            <span className="social-media-link__text">GitHub</span>
          </a>
          <a className="social-media-link" href="https://twitter.com/Joseph_Wynn">
            <Icon name="twitter"/>
            <span className="social-media-link__text">Twitter</span>
          </a>
          <a className="social-media-link" href="https://wildlyinaccurate.com/">
            <Icon name="wildlyinaccurate"/>
            <span className="social-media-link__text">Blog</span>
          </a>
        </div>
      </nav>
    )
  }
}

export default Header
