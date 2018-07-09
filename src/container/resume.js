const { h } = require('preact')
const Introduction = require('../component/introduction')

module.exports = () => (
  <div className="container pt-4 mt-4">
    <div className="mx-auto w-80">
        <Introduction />
    </div>
  </div>
)
