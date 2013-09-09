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
      'AngularJS',
      'jQuery',
      'Knockout',
      'CoffeeScript'
    ]),

    new Skill('Version control', [
      'Git',
      'SVN',
    ]),

    new Skill('Testing', [
      'PHPUnit',
      'Behat',
      'Jasmine',
      'Roundup'
    ]),

    new Skill('Server administration', [
      'Vagrant',
      'Chef',
      'Nginx',
      'Apache',
      'MySQL',
      'Munin'
    ])
  ]

angular.module('resumeApp').factory 'skillsService', ->
  new SkillsService
