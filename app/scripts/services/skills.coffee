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

    new Skill('JavaScript', [
      'AngularJS',
      'jQuery',
      'Knockout',
      'CoffeeScript'
    ]),

    new Skill('HTML & CSS', [
      'HTML5',
      'CSS3',
      'BEM',
      'Performance',
      'Mobile Optimisation'
    ]),

    new Skill('Testing', [
      'PHPUnit',
      'Mockery',
      'Behat',
      'Jasmine',
      'Sinon'
    ]),

    new Skill('Databases', [
      'MySQL',
      'Postgres'
    ]),

    new Skill('Web Servers', [
      'Nginx',
      'Apache',
      'Ad-Hoc (Node.js, Go)'
    ]),

    new Skill('Workflow', [
      'Git',
      'Vagrant',
      'Grunt',
      'Jenkins'
    ]),

    new Skill('System Administration', [
      'Puppet',
      'Chef',
      'Munin'
    ])
  ]

angular.module('resumeApp').factory 'skillsService', ->
  new SkillsService
