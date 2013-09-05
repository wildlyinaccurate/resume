'use strict'

window.Github = window.Github || {}

injector = angular.injector(['ng'])

class window.Github.User
  constructor: (@username) ->
    @repos = []

  repositories: (callback) ->
    injector.get('$rootScope').$apply =>
      injector.get('$http').get("https://api.github.com/users/#{@username}/repos?per_page=100")
        .success (data) =>
          return callback @repos if @repos.length > 0

          @repos = []
          @repos.push new Github.Repository(repo) for repo in data

          callback @repos
