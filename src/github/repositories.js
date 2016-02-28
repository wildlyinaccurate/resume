import _fetch from 'isomorphic-fetch'

import compose from 'ramda/src/compose'
import contains from 'ramda/src/contains'
import curry from 'ramda/src/curry'
import find from 'ramda/src/find'
import flip from 'ramda/src/flip'
import keys from 'ramda/src/keys'
import not from 'ramda/src/not'
import prop from 'ramda/src/prop'
import reverse from 'ramda/src/reverse'
import sortBy from 'ramda/src/sortBy'

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
