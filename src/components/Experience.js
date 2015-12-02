import React, { Component } from 'react'
import Icon from './Icon'

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <h2 className="display-1 m-b-md text-center">Experience</h2>

        <div className="row">
          <div className="col-sm-3">
            <Icon name="bbc-news" style="full"/>
          </div>

          <div className="col-sm-9">
            <h3>BBC News</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
