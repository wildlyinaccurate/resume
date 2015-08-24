angular.module('resumeApp')
  .controller('skillsController', ($scope, skillsService) => {
    $scope.skills = skillsService.all()
  })
