const { h } = require('preact')
const Introduction = require('../component/introduction')
const OpenSource = require('../component/open-source')

module.exports = function Resume() {
  return (
    <div className="container pt-4 mt-4">
      <div className="mx-auto w-80">
        <Introduction />
      </div>

      <OpenSource />
    </div>
  )
}
