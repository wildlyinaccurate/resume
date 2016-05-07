import React from 'react'

const Introduction = React.createClass({
  render () {
    return (
      <div id="introduction" className="introduction section text-xs-center">
        <h4 className="introduction__heading display-2">Hello!</h4>
        <p className="lead">
          I'm a developer based in London, UK. Right now I'm working as a JavaScript, Ruby, and PHP developer with a focus on DevOps and automated testing. In my spare time I maintain several open source projects, and I like to write Haskell and Elm.
        </p>

        <p className="lead">
          Outside of programming I am a cook, runner, rock climber and guitarist. I'm also an <a href="https://wildlyinaccurate.com/accidental-keyboard-enthusiasm/">accidental keyboard enthusiast</a>. I sometimes blog at <a href="https://wildlyinaccurate.com/">Wildly Inaccurate</a>.
        </p>
      </div>
    )
  }
})

export default Introduction
