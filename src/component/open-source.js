const { h } = require('preact')
const second = require('second')

const accessToken = 'ff7cece3c58d2a457908136b35475cbdf708d3d6'
  .split('')
  .reverse()
  .join('')

module.exports = second.createContainer(OpenSource, {
  data: props => ({
    repos: {
      uri: `https://api.github.com/user/repos?per_page=30&type=owner&sort=pushed&access_token=${accessToken}`,
      pick: ['name', 'html_url', 'description', 'stargazers_count', 'language']
    }
  })
})

function sortByStars(a, b) {
  return b.stargazers_count - a.stargazers_count
}

function OpenSource(props) {
  return (
    <div className="text-center">
      {props.repos
        .sort(sortByStars)
        .slice(0, 8)
        .map(OpenSourceItem)}
    </div>
  )
}

function OpenSourceItem(props) {
  return <pre>{JSON.stringify(props, null, 4)}</pre>
}
