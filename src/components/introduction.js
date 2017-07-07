const { h } = require('preact')

module.exports = function Introduction () {
  return (
    <div id="introduction" className="introduction section text-center">
      <h4 className="introduction__heading display-2">Hello!</h4>
      <p className="lead">
        I'm a web developer for BBC News. I want to build web sites for <a href="https://www.youtube.com/watch?v=E6hGubMkNfM">the next billion</a>, so unsurprisingly I have a passion for performance and accessibility. Most days you can find me writing JavaScript, Ruby, and Shell. When I'm not building for the web, I'm trying to improve workflows by creating tooling and optimising build pipelines.
      </p>

      <p className="lead">
        In my spare time I maintain several open source projects, and I like to write Haskell and Elm. Outside of programming I am a cook, runner, rock climber and guitarist. I'm also an <a href="https://wildlyinaccurate.com/accidental-keyboard-enthusiasm/">accidental keyboard enthusiast</a>. I sometimes blog at <a href="https://wildlyinaccurate.com/">Wildly Inaccurate</a>.
      </p>
    </div>
  )
}
