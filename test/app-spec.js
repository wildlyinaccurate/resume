import { h, render } from 'preact'
import { createMountPoint, removeMountPoint } from './support/test-helpers'

import App from '../src/containers/App'

describe('App', () => {
  let mountPoint

  const $ = document.querySelector.bind(document)

  beforeAll(done => {
    mountPoint = createMountPoint()
    render(<App />, mountPoint)

    // Wait for AJAX requests to complete
    setTimeout(done, 3000)
  })

  afterAll(() => {
    removeMountPoint(mountPoint)
  })

  it('should render the introduction', () => {
    expect($('#introduction').innerHTML).toContain('Hello!')
  })

  it('should render the skills section', () => {
    expect($('#skills').innerHTML).toContain('Skills')
    expect($('#skills').innerHTML).toContain('Languages')
    expect($('#skills').innerHTML).toContain('JavaScript')
    expect($('#skills').innerHTML).toContain('Git')
  })

  it('should render the experience section', () => {
    expect($('#experience').innerHTML).toContain('Experience')
    expect($('#experience').innerHTML).toContain('BBC News')
    expect($('#experience').innerHTML).toContain('Rightster')
  })

  it('should render the publications section', () => {
    expect($('#publications').innerHTML).toContain('Publications')
    expect($('#publications').innerHTML).toContain(`A Hacker's Guide to Git`)
  })

  it('should render the open source section', () => {
    expect($('#open-source').innerHTML).toContain('Open Source')
    expect($('#open-source').innerHTML).toContain('jekyll-responsive-image')
    expect($('#open-source').innerHTML).toContain('plait')
  })
})
