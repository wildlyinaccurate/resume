import { compose, contains, find, flip, keys, map, not, prop, reverse, sortBy, take } from 'ramda'
import React from 'react'
import fetch from 'isomorphic-fetch'

import OpenSourceItem from './OpenSourceItem'

const OpenSource = React.createClass({
  getInitialState: function() {
    return {
      items: '',
    }
  },

  componentDidMount: function() {
    fetch(`https://api.github.com/users/${this.props.username}/repos?per_page=100`)
      .then(response => response.json())
      .then(this.sortRepositories)
      .then(take(10))
      .then(this.getRepositoryLanguages)
      .then(this.dataToOpenSourceItems)
      .then(items => this.setState({ items }))
  },

  sortRepositories: compose(
    reverse,
    sortBy(prop('stargazers_count'))
  ),

  getRepositoryLanguages: function(repositories) {
    return Promise.all(map(this.getRepositoryLanguage, repositories))
  },

  getRepositoryLanguage: function(repository) {
    return fetch(repository.languages_url)
      .then(response => response.json())
      .then(keys)
      .then(find(this.isRealLanguage))
      .then((language) => {
        repository.language = language

        return repository
      })
  },

  isRealLanguage: compose(not, flip(contains)(['HTML', 'CSS'])),

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
          Below is a small collection of my most popular open source work. You can visit <a href="https://github.com/wildlyinaccurate?tab=repositories">my GitHub profile</a> for a more complete picture of the open source work that I do.
        </p>

        <div className="row">
          {this.state.items}
        </div>
      </div>
    )
  }
})

export default OpenSource
