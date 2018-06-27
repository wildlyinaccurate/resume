const { h } = require('preact')

module.exports = function PrintHeader () {
  return (
    <small className="d-none d-print-block container-fluid text-right">
      <address>
        <strong>Joseph Wynn</strong>
        <br />
        joseph@wildlyinaccurate.com
        <br />
        resume.wildlyinaccurate.com
      </address>
    </small>
  )
}
