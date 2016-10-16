const { h, Component } = require('preact')
const fetch = require('isomorphic-fetch')

const compose = require('ramda/src/compose')
const groupBy = require('ramda/src/groupBy')
const map = require('ramda/src/map')
const mapObjIndexed = require('ramda/src/mapObjIndexed')
const prop = require('ramda/src/prop')
const values = require('ramda/src/values')

const SkillItem = require('./SkillItem')

const mappedDataToSkillItems = mapObjIndexed((skills, category) => {
  const items = map(data => {
    return <SkillItem key={data.name} {...data} />
  }, skills)

  return (
    <div key={category} className='col-xs-6 col-md-4 m-b-3'>
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
      <div id='skills' className='section text-xs-center'>
        <h2 className='display-4 m-b-2'>Skills</h2>

        <div className='row center-cols'>
          {this.state.skills}
        </div>
      </div>
    )
  }
}
