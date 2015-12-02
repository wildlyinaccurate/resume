import React, { Component } from 'react'
import Icon from './Icon'

class ExperienceItem extends Component {
  dateString(date) {
    const dateObj = new Date(date)

    return dateObj.toDateString()
  }

  endDate(date) {
    return date ? this.dateString(date) : 'Present'
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <Icon name={this.props.icon} style="full"/>
        </div>

        <div className="col-sm-9">
          <h3>{this.props.name}</h3>

          {this.dateString(this.props.startDate)} &mdash; {this.endDate(this.props.endDate)}

          <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
        </div>
      </div>
    )
  }
}

export default ExperienceItem
