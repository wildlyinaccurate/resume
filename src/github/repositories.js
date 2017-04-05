const fetch = require('isomorphic-fetch')

const compose = require('ramda/src/compose')
const contains = require('ramda/src/contains')
const curry = require('ramda/src/curry')
const find = require('ramda/src/find')
const flip = require('ramda/src/flip')
const keys = require('ramda/src/keys')
const not = require('ramda/src/not')
const prop = require('ramda/src/prop')
const reverse = require('ramda/src/reverse')
const sortBy = require('ramda/src/sortBy')

module.exports.get = function (accessToken) {
  return fetch(`https://api.github.com/user/repos?per_page=30&type=owner&sort=pushed&access_token=${accessToken}`)
    .then(response => response.json())
}

module.exports.sort = curry((sortProp, repositories) => {
  return compose(
    reverse,
    sortBy(prop(sortProp))
  )(repositories)
})

const isRealLanguage = compose(not, flip(contains)(['HTML', 'CSS', 'Gherkin']))

const fetchRepositoryLanguage = repository => {
  return fetch(repository['languages_url'])
    .then(response => response.json())
    .then(keys)
    .then(find(isRealLanguage))
}

module.exports.getLanguage = function (repository) {
  if (isRealLanguage(repository['language'])) {
    return Promise.resolve(repository)
  } else {
    return fetchRepositoryLanguage(repository).then(language => {
      repository['language'] = language

      return repository
    })
  }
}
