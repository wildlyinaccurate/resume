'use strict'

class EmploymentHistoryService
  all: ->
    ipc = new Role('Developer', new Date('2012-05-01'))
    ipc.setEmployer new Employer('IPC Media', 'http://www.ipcmedia.com/')
    ipc.setDescription """
    Our team manages the platform which serves the mobile version of several websites including <a href="http://www.marieclaire.co.uk/">Marie Claire</a> and <a href="http://www.goodtoknow.co.uk/">goodtoknow</a>.
    The platform is based on Symfony2 and works as an API client by retrieving data from the desktop version of each website.<br>
    <br>
    I have also previously worked in a team which maintained high-traffic magazine websites including <a href="http://www.goodtoknow.co.uk/">goodtoknow</a>, <a href="http://www.womanandhome.com/">Woman & Home</a> and <a href="http://www.nowmagazine.co.uk/">Now</a>.
    """

    chroma = new Role('Developer', new Date('2011-04-01'), new Date('2012-05-01'))
    chroma.setEmployer new Employer('Chroma', 'http://www.chromaagency.com/')
    chroma.setDescription """
    At Chroma I was involved in designing and building an interface for bookmakers to monitor and set pricing in real time.
    The real-time aspect of this sytem was achieved using long polling.<br>
    <br>
    Using the Campaign Monitor API I built an ExpressionEngine module which allowed editors to create email campaigns from existing articles.
    """

    zeevo = new Role('Developer', new Date('2010-06-01'), new Date('2011-04-01'))
    zeevo.setEmployer new Employer('Zeevo', 'http://www.zeevo.co.nz')
    zeevo.setDescription """
    Using CodeIgniter and Doctrine, our team built a <a href="http://book.totallytourism.co.nz/">booking and scheduling system</a> for tourism operators.<br>
    <br>
    I was also involved in designing and building a secure file sharing application using the Dropbox API.
    """

    mind_media = new Role 'Freelancer', new Date('2008-04-01'), new Date('2010-06-01')
    mind_media.setDescription """
    Working as a freelancer I built websites using Wordpress and bespoke PHP systems.
    Some of the websites I worked on are <a href="http://www.prologue.co.nz/">Prologue</a>, <a href="http://www.2feettall.com/">2FeetTall</a> and <a href="http://www.bali-direct-villa.com/">Villa Puri Indah</a>.
    """

    [ipc, chroma, zeevo, mind_media]

angular.module('resumeApp').factory 'employmentHistoryService', ->
  new EmploymentHistoryService
