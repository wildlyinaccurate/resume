let injector = angular.injector(['ng'])

class User {

  constructor (username) {
    this.username = username
    this.repos = []
  }

  repositories (callback) {
    injector.get('$rootScope').$apply(() => {
      injector.get('$http').get(`https://api.github.com/users/${this.username}/repos?per_page=100`)
        .success((data) => {
          if (this.repos.length > 0) {
            return this.repos
          }

          this.repos = data.map((repo) => {
            return new Github.Repository(repo)
          })

          callback(this.repos)
        })
    })
  }

}

window.Github = window.Github || {}
window.Github.User = User
