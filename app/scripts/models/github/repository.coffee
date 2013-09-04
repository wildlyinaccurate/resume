'use strict'

window.Github = window.Github || {}

class window.Github.Repository
  constructor: (data) ->
    this[key] = value for key, value of data

    @popularity = @watchers + @forks
