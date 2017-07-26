const { h } = require('preact')

module.exports = function Introduction () {
  return (
    <div id="introduction" className="introduction section text-center px-0 py-4 px-md-5">
      <h5 className="introduction__heading display-3">Hello!</h5>
      <p className="lead">
        My name is Joseph Wynn. I'm a web developer with a focus on performance and accessibility. My experience is with high-traffic, high-availability distributed systems at companies like BBC News and Time. I maintain some <a href="https://github.com/wildlyinaccurate/">open source projects</a><span className="visible-print-inline"> (github.com/wildlyinaccurate)</span> and occasionally <a href="https://wildlyinaccurate.com/">blog about my experiences</a><span className="visible-print-inline"> (wildlyinaccurate.com)</span>.
      </p>
    </div>
  )
}
