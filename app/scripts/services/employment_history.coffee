'use strict'

class EmploymentHistoryService
  all: ->
    rightster = new Role 'Senior Developer', new Date('2013-12-01')
    rightster.setEmployer new Employer('Rightster', 'http://rightster.com/')
    rightster.setDescription """
    I am currently working with team of talented developers building Rightster's next-generation video distribution platform. We're using Zend Framework 2 to power our application, and AngularJS to create amazing user interfaces.
    """

    ipc_media = new Employer('IPC Media', 'http://www.ipcmedia.com/')

    ipc_senior = new Role 'Senior Developer', new Date('2013-09-01'), new Date('2013-12-01')
    ipc_senior.setEmployer ipc_media
    ipc_senior.setDescription """
    I helped to define a Git workflow during our department's move from SVN to Git, and supported other teams throughout the migration.<br>
    <br>
    After pushing for Node.js on our build servers, I evangelised JavaScript unit testing by writing test suites for several of our key JavaScript projects. I also spoke to the department about JavaScript unit testing to encourage other developers to test their JavaScript. The slides for my talk are <a href="http://slid.es/wildlyinaccurate/automated-javascript-testing">available here</a>.
    """

    ipc = new Role 'Developer', new Date('2012-05-01'), new Date('2013-09-01')
    ipc.setEmployer ipc_media
    ipc.setDescription """
    Our team developed and maintained the platform which serves the mobile version of several websites including <a href="http://www.marieclaire.co.uk/">Marie Claire</a> and <a href="http://www.goodtoknow.co.uk/">goodtoknow</a>.
    The platform is built on Symfony2 and works as an API client by retrieving data from the desktop version of each website.<br>
    <br>
    I was also involved in developing some interesting products including goodtoknow's <a href="http://www.goodtoknow.co.uk/recipes/myrecipes">My Recipe Book</a>, <a href="http://www.womanandhome.com/">Woman & Home</a> and <a href="http://www.nowmagazine.co.uk/">Now</a>.
    """

    chroma = new Role 'Developer', new Date('2011-04-01'), new Date('2012-05-01')
    chroma.setEmployer new Employer('Chroma', 'http://www.chromaagency.com/')
    chroma.setDescription """
    At Chroma I was involved in designing and building an interface for bookmakers to monitor and set pricing in real time.
    The real-time aspect of this sytem was achieved using long polling.<br>
    <br>
    Using the Campaign Monitor API I built an ExpressionEngine module which allowed editors to create email campaigns from within the ExpressionEngine CMS.
    """

    zeevo = new Role 'Developer', new Date('2010-06-01'), new Date('2011-04-01')
    zeevo.setEmployer new Employer 'Zeevo', 'http://www.zeevo.co.nz/'
    zeevo.setDescription """
    Using CodeIgniter and Doctrine, our team built a <a href="http://book.totallytourism.co.nz/">booking and scheduling system</a> for tourism operators.<br>
    <br>
    I was also involved in designing and building a secure file sharing application using the Dropbox API.
    """

    [rightster, ipc_senior, ipc, chroma, zeevo]

angular.module('resumeApp').factory 'employmentHistoryService', ->
  new EmploymentHistoryService
