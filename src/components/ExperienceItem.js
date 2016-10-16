const { h, Component } = require('preact')

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

module.exports = class ExperienceItem extends Component {
  dateString (date) {
    const [year, month, day] = date.split('-')

    return `${months[month]} ${year}`
  }

  endDateString (date) {
    return date ? this.dateString(date) : 'Present'
  }

  paragraphs (text) {
    return `<p>${text.split('\n\n').join('</p><p>')}</p>`
  }

  render () {
    return (
      <div className='row p-b-1'>
        <div className='col-xs-12 col-sm-3 text-xs-center p-b-1'>
          <a href={this.props['url']}>
            <img className='img-fluid center-block' src={this.props['image']}/>
          </a>
        </div>

        <div className='col-xs-12 col-sm-9'>
          <h4>
            {this.props['role']} at <a href={this.props['url']}>{this.props['name']}</a>
          </h4>

          {this.dateString(this.props['startDate'])} &mdash; {this.endDateString(this.props['endDate'])}

          {
            h('div', {
              'dangerouslySetInnerHTML': {
                __html: this.paragraphs(this.props['description'])
              }
            })
          }
        </div>
      </div>
    )
  }
}
