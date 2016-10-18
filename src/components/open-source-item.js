const { h } = require('preact')

const Icon = require('./icon')

module.exports = function OpenSourceItem (props) {
  return (
    <div className='col-xs-12 col-lg-6 m-b-2'>
      <h4>
        <small title={`${props['stargazers_count']} stars`} className='star-count pull-xs-right'>
          {props['stargazers_count']}
          <Icon name='star' />
        </small>

        <a href={props['html_url']}>{props['name']}</a>
        <span className='tag tag-primary m-l-1/2'>{props['language']}</span>
      </h4>

      <p>
        {props['description']}
      </p>
    </div>
  )
}
