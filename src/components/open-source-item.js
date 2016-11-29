const { h } = require('preact')

const Icon = require('./icon')

module.exports = function OpenSourceItem (props) {
  return (
    <div className='col-xs-12 col-lg-6 mb-2'>
      <h4>
        <small title={`${props['stargazers_count']} stars`} className='star-count float-xs-right'>
          {props['stargazers_count']}
          <Icon name='star' />
        </small>

        <a href={props['html_url']}>{props['name']}</a>
        <span className='tag tag-primary ml-1/2'>{props['language']}</span>
      </h4>

      <p>
        {props['description']}
      </p>
    </div>
  )
}
