'use strict'

angular.module('resumeApp')
  .filter 'paragraphs', ->
    (text) ->
      text.split('\n\n')
