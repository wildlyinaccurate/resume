'use strict'

window.Github = window.Github || {}

class window.Github.User
  constructor: (@username) ->
    @repos = []

  repositories: (callback) ->
    $.getJSON "https://api.github.com/users/#{@username}/repos?per_page=100&callback=?", (response) =>
      return callback @repos if @repos.length > 0

      @repos = []
      @repos.push new Github.Repository(repo) for repo in response.data

      callback @repos
