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
      'Mobile optimisation'
    ]),

    new Skill('JavaScript', [
      'Angular',
      'jQuery',
      'Knockout',
      'Backbone',
      'YUI'
    ]),

    new Skill('Version control', [
      'Git',
      'SVN',
    ]),

    new Skill('Testing', [
      'PHPUnit',
      'Behat',
      'Mocha',
      'Karma'
    ]),

    new Skill('Server administration', [
      'Nginx',
      'Apache',
      'MySQL',
      'Monitoring',
      'Security'
    ])
  ]

angular.module('resumeApp').factory 'skillsService', ->
  new SkillsService
