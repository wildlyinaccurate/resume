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

  paragraphs(text) {
    return `
      <p>
        ${text.split('\n\n').join('</p><p>')}
      </p>
    `
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-3 text-xs-center">
          <a href={this.props.url}>
            <Icon name={this.props.icon} style="full"/>
          </a>
        </div>

        <div className="col-sm-9">
          <h4>
            {this.props.role} at <a href={this.props.url}>{this.props.name}</a>
          </h4>

          {this.dateString(this.props.startDate)} &mdash; {this.endDate(this.props.endDate)}

          <div dangerouslySetInnerHTML={{ __html: this.paragraphs(this.props.description) }} />
        </div>
      </div>
    )
  }
}

export default ExperienceItem
