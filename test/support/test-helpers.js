module.exports.createMountPoint = function () {
  const div = document.createElement('div')
  div.id = `test-mount-point-${Date.now()}`
  document.body.appendChild(div)

  return div
}

module.exports.removeMountPoint = function (mountPoint) {
  return document.body.removeChild(mountPoint)
}
