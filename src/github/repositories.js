import { compose, contains, curry, find, flip, keys, not, prop, reverse, sortBy } from 'ramda'
import _fetch from 'isomorphic-fetch'

export function fetch (accessToken) {
  return _fetch(`https://api.github.com/user/repos?per_page=100&access_token=${accessToken}`)
    .then(response => response.json())
}

export const sort = curry((sortProp, repositories) => {
  return compose(
    reverse,
    sortBy(prop(sortProp))
  )(repositories)
})

const isRealLanguage = compose(not, flip(contains)(['HTML', 'CSS']))

const fetchRepositoryLanguage = repository => {
  return _fetch(repository.languages_url)
    .then(response => response.json())
    .then(keys)
    .then(find(isRealLanguage))
}

export function getLanguage (repository) {
  if (isRealLanguage(repository.language)) {
    return Promise.resolve(repository)
  } else {
    return fetchRepositoryLanguage(repository).then(language => {
      repository.language = language

      return repository
    })
  }
}
