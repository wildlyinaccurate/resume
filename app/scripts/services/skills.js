class SkillsService {

  all () {
    return [
      new Skill('PHP', [
        'Symfony',
        'Doctrine',
        'Laravel',
        'Slim',
        'SPL',
        'HHVM'
      ]),

      new Skill('JavaScript', [
        'AngularJS',
        'jQuery',
        'Lodash / Underscore',
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
        'PostgreSQL'
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

      new Skill('DevOps', [
        'Puppet',
        'Chef',
        'Munin'
      ])
    ]
  }

}

angular.module('resumeApp').factory('skillsService', () => new SkillsService())
