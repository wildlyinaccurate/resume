import React, { Component } from 'react'

import Icon from './Icon'

class Header extends Component {
  navItems() {
    return ['Introduction', 'Experience', 'Skills', 'Publications'].map((item) => {
      const anchor = `#${item.toLowerCase()}`

      return (
        <li key={item} className="nav-item">
          <a href={anchor} className="nav-link">{item}</a>
        </li>
      )
    })
  }

  render() {

    return (
      <nav className="navbar navbar-fixed-top bg-faded">
        <div className="container">
          <div className="row">
            <div id="navbar" className="col-sm-9">
              <h2 className="pull-left m-r-md">Joseph Wynn</h2>

              <ul className="nav nav-pills hidden-md-down">
                {this.navItems()}
              </ul>
            </div>

            <div className="header-links col-sm-3 text-right">
              <a className="header-link" href="https://wildlyinaccurate.com/">
                <Icon name="wildlyinaccurate" style="super" />
                <span className="header-link__text">wildlyinaccurate.com</span>
              </a>

              <a className="header-link" href="https://github.com/wildlyinaccurate">
                <Icon name="github" style="super" />
                <span className="header-link__text">wildlyinaccurate</span>
              </a>

              <a className="header-link" href="https://twitter.com/Joseph_Wynn">
                <Icon name="twitter" style="super" />
                <span className="header-link__text">@Joseph_Wynn</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
