import React, { Component } from 'react'
import ExperienceItem from './ExperienceItem'

class Experience extends Component {
  render() {
    const experience = [
        {
            name: 'BBC News',
            role: 'Senior Developer',
            startDate: '2014-08-01',
            icon: 'bbc-news',
            description: `

            `
        }
    ]

    const items = experience.map((x) => {
        return <ExperienceItem {...x}/>
    })

    return (
      <div className="experience">
        <h2 className="display-1 m-b-md text-center">Experience</h2>
        {items}
      </div>
    )
  }
}

export default Experience
