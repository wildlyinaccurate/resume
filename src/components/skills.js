const { h, Component } = require('preact')
const fetch = require('isomorphic-fetch')

const compose = require('ramda/src/compose')
const groupBy = require('ramda/src/groupBy')
const map = require('ramda/src/map')
const mapObjIndexed = require('ramda/src/mapObjIndexed')
const prop = require('ramda/src/prop')
const values = require('ramda/src/values')

const SkillItem = require('./skill-item')

const mappedDataToSkillItems = mapObjIndexed((skills, category) => {
  const items = map(data => {
    return <SkillItem {...data} />
  }, skills)

  return (
    <div className="col-6 col-sm-3">
      <h3>{category}</h3>
      {items}
    </div>
  )
})

module.exports = class Skills extends Component {
  constructor (props) {
    super(props)

    this.state = {
      skills: props.data ? this.dataToSkillItems(props.data) : ''
    }
  }

  componentDidMount () {
    fetch('data/skills.json')
      .then(response => response.json())
      .then(data => this.dataToSkillItems(data))
      .then(skills => {
        this.setState({ skills })
      })
  }

  dataToSkillItems (data) {
    return compose(
      values,
      mappedDataToSkillItems,
      groupBy(prop('category')),
      prop('results')
    )(data)
  }

  render () {
    return (
      <div id="toolkit" className="section text-center">
        <h2 className="display-4">Toolkit</h2>

        <div className="row center-cols">
          {this.state.skills}
        </div>
      </div>
    )
  }
}