angular.module('resumeApp')
  .controller('githubRepositoriesController', ($scope) => {

    let user = new Github.User('wildlyinaccurate')

    user.repositories((repositories) => {
      $scope.repositories = repositories.sort((a, b) => {
        return b.popularity - a.popularity
      })

      $scope.$apply()
    })

  })
