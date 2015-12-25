import { compose, join, split, toLower } from 'ramda'

const slug = compose(
  join('-'),
  split(' '),
  toLower
)

export default slug
