import React from 'react'

import Icon from './Icon'

export default class OpenSourceItem extends React.Component {
  render () {
    return (
      <div className='col-xs-12 col-lg-6 m-b-2'>
        <h4>
          <small title={`${this.props.stargazers_count} stars`} className='star-count pull-xs-right'>
            {this.props.stargazers_count}
            <Icon name='star' />
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

OpenSourceItem.propTypes = {
  stargazers_count: React.PropTypes.number.isRequired,
  html_url: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  language: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}
