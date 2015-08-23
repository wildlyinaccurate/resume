class SkillsService {

  all () {
    return [
      new Skill('JavaScript', [
        'ES6',
        'AngularJS',
        'jQuery',
        'Lodash / Underscore',
      ]),

      new Skill('PHP', [
        'Symfony',
        'Doctrine',
        'Laravel',
        'Slim',
        'HHVM',
      ]),

      new Skill('HTML & CSS', [
        'HTML5',
        'CSS3',
        'BEM',
        'Web Performance',
      ]),

      new Skill('Ruby', [
        'Sinatra',
        'JRuby',
      ]),

      new Skill('DevOps', [
        'Docker',
        'AWS',
        'Puppet',
        'Chef',
      ]),

      new Skill('Development Practices', [
        'Automated Testing',
        'Functional Programming',
        'Continuous Integration',
      ]),

      new Skill('Databases', [
        'MySQL',
        'PostgreSQL',
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
        'Jenkins',
      ]),
    ]
  }

}

angular.module('resumeApp').factory('skillsService', () => new SkillsService())
