const { h } = require('preact')

module.exports = function OpenSourceItem (props) {
  return (
    <div className="col-12 col-lg-6 mb-2">
      <h4>
        <small title={`${props['stargazers_count']} stars`} className="star-count float-right">
          {props['stargazers_count']}
          ★
        </small>

        <a href={props['html_url']}>{props['name']}</a>
        <span className="badge badge-primary mx-2">{props['language']}</span>
      </h4>

      <p>
        {props['description']}
      </p>
    </div>
  )
}
