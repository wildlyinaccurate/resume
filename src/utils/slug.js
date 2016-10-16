const compose = require('ramda/src/compose')
const join = require('ramda/src/join')
const split = require('ramda/src/split')
const toLower = require('ramda/src/toLower')

const slug = compose(
  join('-'),
  split(' '),
  toLower
)

module.exports = slug
