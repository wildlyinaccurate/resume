import React, { Component } from 'react'
import ExperienceItem from './ExperienceItem'

class Experience extends Component {
  render() {
    const items = this.experience().map((x) => {
        return <ExperienceItem {...x}/>
    })

    return (
      <div id="experience">
        <h2 className="display-1 m-b-md text-center">Experience</h2>
        {items}
      </div>
    )
  }

  experience() {
    return [
        {
            name: 'BBC News',
            url: 'http://www.bbc.co.uk/news',
            role: 'Senior Developer',
            startDate: '2014-08-01',
            image: 'images/bbc-news.png',
            description: `I am currently a part of the World Service team, working on the responsive BBC News website for 31 different countries. My focuses over the last few months have been on optimising page performance and building cloud-based (AWS) services to augment the News product.`
        },
        {
            name: 'Rightster',
            url: 'http://rightster.com/',
            role: 'Senior Developer',
            image: 'images/rightster.png',
            startDate: '2013-12-01',
            endDate: '2014-08-01',
            description: `At Rightster I helped to build the client-facing interface for the company's video distribution platform. We used Zend Framework 2 as a back-end & presentation layer, and made extensive use of AngularJS to build rich user interfaces.

            As well as leading the JavaScript development, I helped to define a solid architecture and build process for the project's front-end. This was vitally important as the application contained over 20,000 lines of JavaScript. We used RequireJS and the AngularJS module system to decouple the code into small, easily-testable components.`
        },
        {
            name: 'Time Inc. UK',
            url: 'http://www.ipcmedia.com/',
            role: 'Senior Developer',
            image: 'images/time-inc-uk.png',
            startDate: '2012-05-01',
            endDate: '2013-12-01',
            description: `While working on IPC's mobile website platform I became interested in automated testing as a way to improve the quality of our products. I developed a smoke test tool which uses PhantomJS to check for common errors, and takes a screenshot of each page for visual checks. This allowed us to find bugs much more easily and to deploy our websites with more confidence.

            I later introduced JavaScript unit testing to the department by writing test suites for some of our projects. I demonstrated these test suites at our monthly developer gathering. The slides for my talk are <a href="http://slid.es/wildlyinaccurate/automated-javascript-testing">available here</a>.`
        },
        {
            name: 'Chroma',
            url: 'http://www.chromaagency.com/',
            role: 'Developer',
            image: 'images/chroma.png',
            startDate: '2011-04-01',
            endDate: '2012-05-01',
            description: `At Chroma I was involved in designing and building an interface for bookmakers to monitor and set pricing in real time. In order to support legacy browsers, the real-time aspect of this sytem was achieved using long polling.

            Using the Campaign Monitor API I built an ExpressionEngine module which allowed editors to create email campaigns from within the ExpressionEngine CMS.`
        },
        {
            name: 'Zeevo',
            url: 'http://www.zeevo.co.nz/',
            role: 'Developer',
            image: 'images/zeevo.png',
            startDate: '2010-06-01',
            endDate: '2011-04-01',
            description: `Using CodeIgniter and Doctrine, I helped to build a <a href="http://book.totallytourism.co.nz/">booking and scheduling system</a> used by tourism operators around New Zealand.

            I was also involved in designing and building a secure file sharing application using the Dropbox API.`
        }
    ]
  }
}

export default Experience
