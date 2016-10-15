import React from 'react'

export default class PrintHeader extends React.Component {
  render () {
    return (
      <div className='visible-print-block container-fluid text-xs-right'>
        <address>
          <strong>Joseph Wynn</strong>
          <br />
          +44 77 1740 1436
          <br />
          joseph@wildlyinaccurate.com
          <br />
          https://resume.wildlyinaccurate.com
        </address>
      </div>
    )
  }
}
