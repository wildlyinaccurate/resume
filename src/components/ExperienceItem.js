import React, { Component } from 'react'
import dateFormat from 'dateformat'

class ExperienceItem extends Component {
  dateString(date) {
    return dateFormat(date, 'mmmm yyyy')
  }

  endDateString(date) {
    return date ? this.dateString(date) : 'Present'
  }

  paragraphs(text) {
    return `<p>
      ${text.split('\n\n').join('</p><p>')}
    </p>`
  }

  render() {
    return (
      <div className="row p-b-1">
        <div className="col-xs-12 col-sm-3 text-xs-center p-b-1">
          <a href={this.props.url}>
            <img className="img-fluid center-block" src={this.props.image}/>
          </a>
        </div>

        <div className="col-xs-12 col-sm-9">
          <h4>
            {this.props.role} at <a href={this.props.url}>{this.props.name}</a>
          </h4>

          {this.dateString(this.props.startDate)} &mdash; {this.endDateString(this.props.endDate)}

          <div dangerouslySetInnerHTML={{ __html: this.paragraphs(this.props.description) }} />
        </div>
      </div>
    )
  }
}

export default ExperienceItem