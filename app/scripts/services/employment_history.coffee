'use strict'

class EmploymentHistoryService
  all: ->
    ipc = new Role 'Developer', new Date('2012-05-01')
    ipc.setEmployer new Employer('IPC Media', 'http://www.ipcmedia.com/')
    ipc.setDescription 'I am currently part of a team that builds and maintains high-traffic magazine websites.'

    chroma = new Role 'Developer', new Date('2011-04-01'), new Date('2012-05-01')
    chroma.setEmployer new Employer('Chroma', 'http://www.chromaagency.com/')
    chroma.setDescription 'During my time at Chroma I was involved in building, delivering and maintaining websites using ExpressionEngine and CodeIgniter. I designed and built a system that processed and delivered business-critical data in near real-time, and helped to implement a continuous integration process for several projects.'

    zeevo = new Role 'Developer', new Date('2010-06-01'), new Date('2011-04-01')
    zeevo.setEmployer new Employer('Zeevo', 'http://www.zeevo.co.nz')
    zeevo.setDescription 'Using CodeIgniter and Doctrine, our team built a <a href="http://book.totallytourism.co.nz/">booking and scheduling system</a> for tourism operators. I was also involved in designing and building a secure file sharing application using the Dropbox API.'

    mind_media = new Role 'Freelancer', new Date('2008-04-01'), new Date('2010-06-01')
    mind_media.setDescription 'Working as a freelancer I built websites on Wordpress and bespoke PHP systems. Some of the websites I worked on are <a href="http://www.prologue.co.nz/">Prologue</a>, <a href="http://www.2feettall.com/">2FeetTall</a> and <a href="http://www.bali-direct-villa.com/">Villa Puri Indah</a>.'

    [ipc, chroma, zeevo, mind_media]

angular.module('resumeApp').factory 'employmentHistoryService', ->
  new EmploymentHistoryService
