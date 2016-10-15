import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='section hidden-print'>
        <div className='row'>
          <div className='col-xs-12'>
            Made with ❤ by Joseph Wynn.
            The code for this page is <a href='https://github.com/wildlyinaccurate/resume'>available on GitHub</a>.
          </div>
        </div>
      </footer>
    )
  }
}
