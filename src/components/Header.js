import React, { Component } from 'react'

import Icon from './Icon'

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <h1 className="pull-left text-center">Joseph Wynn</h1>
        </div>

        <div className="header-links col-md-4 pull-right">
          <a className="header-link" href="https://wildlyinaccurate.com/">
            <Icon name="wildlyinaccurate"/>
            <span className="header-link__text">wildlyinaccurate.com</span>
          </a>

          <a className="header-link" href="https://github.com/wildlyinaccurate">
            <Icon name="github"/>
            <span className="header-link__text">wildlyinaccurate</span>
          </a>

          <a className="header-link" href="https://twitter.com/Joseph_Wynn">
            <Icon name="twitter"/>
            <span className="header-link__text">@Joseph_Wynn</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
