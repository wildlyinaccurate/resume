angular.module('resumeApp')
  .controller('employmentHistoryController', ($scope, employmentHistoryService) => {
    $scope.employmentHistory = employmentHistoryService.all()
  })
