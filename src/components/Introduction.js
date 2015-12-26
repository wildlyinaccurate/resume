import React, { Component } from 'react'

class Introduction extends Component {
  render() {
    return (
      <div id="introduction" className="introduction section text-xs-center">
        <h4 className="introduction__heading display-2">Hello!</h4>
        <p className="lead">
            I'm a developer based in London, UK. Right now I am working as a JavaScript, Ruby and PHP developer; but in my spare time I like to write Haskell and Elm. I'm really passionate about building a better web, and I try to do my part by evangelising good development practices and modern web technologies.
        </p>

        <p className="lead">
            Outside of programming I am a cook, runner, rock climber and guitarist. I'm also an <a href="https://wildlyinaccurate.com/accidental-keyboard-enthusiasm/">accidental keyboard enthuiast</a>. I sometimes blog at <a href="https://wildlyinaccurate.com/">Wildly Inaccurate</a>.
        </p>
      </div>
    )
  }
}

export default Introduction
