'use strict'

angular.module('resumeApp')
  .controller 'githubRepositoriesController', ['$scope', ($scope) ->

    user = new Github.User 'wildlyinaccurate'

    user.repositories (repositories) ->
      $scope.repositories = repositories.sort (a, b) ->
        b.popularity - a.popularity

      $scope.$apply()
  ]
