const { h } = require('preact')

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

function dateString (date) {
  const [year, month] = date.split('-')

  return `${months[month]} ${year}`
}

function endDateString (date) {
  return date ? dateString(date) : 'Present'
}

function paragraphs (text) {
  return `<p>${text.split('\n\n').join('</p><p>')}</p>`
}

module.exports = function ExperienceItem (props) {
  return (
    <div className="row mb-3">
      <div className="col-3 d-none d-sm-block text-center">
        <a href={props['url']}>
          <img className="img-fluid center-block" src={props['image']} />
        </a>
      </div>

      <div className="col-12 col-sm-9">
        <h4>
          {props['role']} at <a href={props['url']}>{props['name']}</a>
        </h4>

        {dateString(props['startDate'])} &mdash; {endDateString(props['endDate'])}

        {
          h('div', {
            'dangerouslySetInnerHTML': {
              __html: paragraphs(props['description'])
            }
          })
        }

        <p><b>Tech Stack:</b> {props['techStack']}</p>
      </div>
    </div>
  )
}
