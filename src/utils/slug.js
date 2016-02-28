import compose from 'ramda/src/compose'
import join from 'ramda/src/join'
import split from 'ramda/src/split'
import toLower from 'ramda/src/toLower'

const slug = compose(
  join('-'),
  split(' '),
  toLower
)

export default slug
