'use strict'

class SkillsService
  all: -> [
    new Skill('PHP', [
      'Symfony',
      'Doctrine',
      'Laravel',
      'Slim',
      'SPL'
    ]),

    new Skill('HTML & CSS', [
      'HTML5',
      'CSS3',
      'Performance',
      'Mobile Optimisation'
    ]),

    new Skill('JavaScript', [
      'AngularJS',
      'jQuery',
      'Knockout',
      'CoffeeScript'
    ]),

    new Skill('Testing', [
      'PHPUnit',
      'Mockery',
      'Behat',
      'Jasmine',
      'Sinon'
    ]),

    new Skill('Workflow', [
      'Git',
      'Vagrant',
      'Grunt',
      'Jenkins'
    ]),

    new Skill('System Administration', [
      'Chef',
      'Nginx',
      'Apache',
      'MySQL',
      'Munin'
    ])
  ]

angular.module('resumeApp').factory 'skillsService', ->
  new SkillsService
