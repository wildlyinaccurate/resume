import React, { Component } from 'react'

import Icon from './Icon'

class Header extends Component {
  render() {
    const navItems = ['Experience'].map((item) => {
      const anchor = `#${item.toLowerCase()}`

      return (
        <li className="nav-item">
          <a href={anchor} className="nav-link">{item}</a>
        </li>
      )
    })

    return (
      <nav className="navbar navbar-fixed-top bg-faded">
        <div id="navbar" className="col-md-8">
          <h2 className="pull-left m-r-md">Joseph Wynn</h2>

          <ul className="nav nav-pills hidden-sm-down">
            {navItems}
          </ul>
        </div>

        <div className="header-links col-md-4 text-right">
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
      </nav>
    )
  }
}

export default Header
