angular.module('resumeApp')
  .filter('paragraphs', () => {
    return (text) => text.split('\n\n')
  })
