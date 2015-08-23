class Repository {

  constructor (data) {
    Object.keys(data).forEach((key) => {
        this[key] = data[key]
    })

    this.popularity = this.watchers + this.forks
  }

}

window.Github = window.Github || {}
window.Github.Repository = Repository
