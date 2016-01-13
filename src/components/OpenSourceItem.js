import React, { Component } from 'react'

import Icon from './Icon'

class OpenSourceItem extends Component {
  render() {
    return (
      <div className="col-md-12 col-lg-6 m-b-2">
        <h4>
          <small title={this.props.stargazers_count + ' stars'} className="star-count pull-xs-right">
            {this.props.stargazers_count}
            <Icon name="star" />
          </small>

          <a href={this.props.html_url}>{this.props.name} ({this.props.language})</a>
        </h4>

        <p>
          {this.props.description}
        </p>
      </div>
    )
  }
}

export default OpenSourceItem