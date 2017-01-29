const { h } = require('preact')

const slug = require('../utils/slug')
const Icon = require('./icon')

function navItems () {
  return ['Toolkit', 'Experience', 'Publications', 'Open Source'].map(navItem)
}

function navItem (item) {
  const anchor = `#${slug(item)}`

  return (
    <li className='nav-item'>
      <a className="nav-link" href={anchor}>{item}</a>
    </li>
  )
}

module.exports = function Header () {
  return (
    <nav className='navbar fixed-top bg-faded'>
      <div className='container'>
        <div className='row'>
          <div id='navbar' className='col-12 col-sm-7 col-md-8 col-lg-9'>
            <h2 className='float-sm-left mr-2 text-center'>Joseph Wynn</h2>

            <ul className='nav hidden-md-down'>
              {navItems()}
            </ul>
          </div>

          <div className='header-links hidden-down col-sm-5 col-md-4 col-lg-3 text-right'>
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
