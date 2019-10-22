const { h } = require('preact')

module.exports = function Introduction() {
  return (
    <div className="text-center">
      <h5 className="display-3 text-primary">Hello!</h5>
      <p className="lead">
        My name is Joseph Wynn. I'm a full stack developer and engineering team
        lead with a focus on performance and accessibility. My experience is
        with building high-traffic, high-availability distributed systems at
        companies like BBC News and Time Inc. I maintain some{' '}
        <a href="https://github.com/wildlyinaccurate/">open source projects</a>{' '}
        and occasionally{' '}
        <a href="https://wildlyinaccurate.com/">blog about my experiences</a>.
      </p>
    </div>
  )
}
