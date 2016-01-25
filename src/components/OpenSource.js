import { map, reverse, take } from 'ramda'
import React from 'react'

import * as Repositories from '../github/repositories'
import OpenSourceItem from './OpenSourceItem'

const ACCESS_TOKEN = reverse('ff7cece3c58d2a457908136b35475cbdf708d3d6')

const OpenSource = React.createClass({
  getInitialState: function() {
    return {
      items: '',
    }
  },

  componentDidMount: function() {
    Repositories.fetch(ACCESS_TOKEN)
      .then(Repositories.sort('stargazers_count'))
      .then(take(10))
      .then(this.getRepositoryLanguages)
      .then(this.dataToOpenSourceItems)
      .then(items => this.setState({ items }))
  },

  getRepositoryLanguages: function(repositories) {
    return Promise.all(map(Repositories.getLanguage, repositories))
  },

  dataToOpenSourceItems: function(repositories) {
    return repositories.map((props) => {
      return <OpenSourceItem key={props.name} {...props} />
    })
  },

  render: function() {
    return (
      <div id="open-source" className="section">
        <h2 className="display-4 m-b-2 text-xs-center">Open Source</h2>

        <p className="text-xs-center">
          Below is a collection of my most popular open source work. You can visit <a href="https://github.com/wildlyinaccurate?tab=repositories">my GitHub profile</a> for a more complete picture of the open source work that I do.
        </p>

        <div className="row">
          {this.state.items}
        </div>
      </div>
    )
  }
})

export default OpenSource
