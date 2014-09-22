'use strict'

class EmploymentHistoryService
  all: ->
    bbc = new Role 'Senior Developer', new Date('2014-08-01')
    bbc.setEmployer new Employer('BBC News', 'http://www.bbc.co.uk/news')
    bbc.setDescription """
    I currently work for BBC's world services team, who are responsible for the 31 non-English BBC News websites. Our biggest challenge right now is rolling out the responsive version of the BBC News website for all of these services.
    """

    rightster = new Role 'Senior Developer', new Date('2013-12-01'), new Date('2014-08-01')
    rightster.setEmployer new Employer('Rightster', 'http://rightster.com/')
    rightster.setDescription """
    I worked with an amazing team at Rightster, building the front-end of the company's next-generation video distribution platform. We used Zend Framework 2 as a back-end & presenter layer, and made extensive use of AngularJS to build rich user interfaces.

    As well as leading the JavaScript development, I helped to define a solid architecture and build process for the project's front-end. This was vitally important as the application contained over 20,000 lines of JavaScript (not including vendor code). We used RequireJS and Angular's module system to decouple the code into small, easily-testable components.
    """

    ipc_media = new Employer('IPC Media', 'http://www.ipcmedia.com/')

    ipc_senior = new Role 'Senior Developer', new Date('2013-09-01'), new Date('2013-12-01')
    ipc_senior.setEmployer ipc_media
    ipc_senior.setDescription """
    While working on IPC's mobile website platform I became interested in automated testing as a way to improve the quality of our products. I developed a smoke test tool which used PhantomJS to check for common errors and take a screenshot of each page it tested. This allowed us to find bugs much more easily, and deploy our websites with more confidence.

    I later introduced JavaScript unit testing to the department by writing test suites for some of our projects. I demonstrated these test suites at our monthly developer gathering to encourage other teams to start writing test suites. The slides for my talk are <a href="http://slid.es/wildlyinaccurate/automated-javascript-testing">available here</a>.
    """

    ipc = new Role 'Developer', new Date('2012-05-01'), new Date('2013-09-01')
    ipc.setEmployer ipc_media
    ipc.setDescription """
    Our team developed and maintained the mobile website platform which serves the mobile version of several websites including <a href="http://www.marieclaire.co.uk/">Marie Claire</a> and <a href="http://www.goodtoknow.co.uk/">goodtoknow</a>. The platform is built on Symfony2 and works by consuming a JSON feed from the desktop version of each website.

    I was also involved in developing some interesting products including goodtoknow's <a href="http://www.goodtoknow.co.uk/recipes/myrecipes">My Recipe Book</a>, <a href="http://www.womanandhome.com/">Woman & Home</a> and <a href="http://www.nowmagazine.co.uk/">Now</a>.
    """

    chroma = new Role 'Developer', new Date('2011-04-01'), new Date('2012-05-01')
    chroma.setEmployer new Employer('Chroma', 'http://www.chromaagency.com/')
    chroma.setDescription """
    At Chroma I was involved in designing and building an interface for bookmakers to monitor and set pricing in real time.
    The real-time aspect of this sytem was achieved using long polling.

    Using the Campaign Monitor API I built an ExpressionEngine module which allowed editors to create email campaigns from within the ExpressionEngine CMS.
    """

    zeevo = new Role 'Developer', new Date('2010-06-01'), new Date('2011-04-01')
    zeevo.setEmployer new Employer 'Zeevo', 'http://www.zeevo.co.nz/'
    zeevo.setDescription """
    Using CodeIgniter and Doctrine, our team built a <a href="http://book.totallytourism.co.nz/">booking and scheduling system</a> for tourism operators.

    I was also involved in designing and building a secure file sharing application using the Dropbox API.
    """

    [bbc, rightster, ipc_senior, ipc, chroma, zeevo]

angular.module('resumeApp').factory 'employmentHistoryService', ->
  new EmploymentHistoryService
