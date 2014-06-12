'use strict'

angular.module('resumeApp')
  .controller 'introController', ['$scope', ($scope) ->
    $scope.showContactDetails = false
    $scope.emailAddress = 'joseph+work@wildlyinaccurate.com'
  ]
