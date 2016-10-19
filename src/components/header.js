const { h } = require('preact')

const slug = require('../utils/slug')
const Icon = require('./icon')

function navItems () {
  return ['Toolkit', 'Experience', 'Publications', 'Open Source'].map(navItem)
}

function navItem (item) {
  const anchor = `#${slug(item)}`

  return (
    <li key={item} className='nav-item'>
      <a href={anchor} className='nav-link'>{item}</a>
    </li>
  )
}

module.exports = function Header () {
  return (
    <nav className='navbar navbar-fixed-top bg-faded'>
      <div className='container'>
        <div className='row'>
          <div id='navbar' className='col-xs-12 col-sm-7 col-md-8 col-lg-9'>
            <h2 className='pull-sm-left m-r-2 text-xs-center'>Joseph Wynn</h2>

            <ul className='nav nav-pills hidden-md-down'>
              {navItems()}
            </ul>
          </div>

          <div className='header-links hidden-xs-down col-sm-5 col-md-4 col-lg-3 text-xs-right'>
            <a className='header-link' href='https://wildlyinaccurate.com/'>
              <Icon name='wildlyinaccurate' style='super' />
              <span className='header-link__text'>wildlyinaccurate.com</span>
            </a>

            <a className='header-link' href='https://github.com/wildlyinaccurate'>
              <Icon name='github' style='super' />
              <span className='header-link__text'>wildlyinaccurate</span>
            </a>

            <a className='header-link' href='https://twitter.com/Joseph_Wynn'>
              <Icon name='twitter' style='super' />
              <span className='header-link__text'>@Joseph_Wynn</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}