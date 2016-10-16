export function createMountPoint () {
  const div = document.createElement('div')
  div.id = `test-mount-point-${Date.now()}`
  document.body.appendChild(div)

  return div
}

export function removeMountPoint (mountPoint) {
  return document.body.removeChild(mountPoint)
}
