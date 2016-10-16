const { h, Component } = require('preact')

module.exports = class PrintHeader extends Component {
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
