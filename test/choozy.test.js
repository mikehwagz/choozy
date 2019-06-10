const choozy = require('../dist/choozy')

describe('choozy:', () => {
  it('should be a function', () => {
    expect(typeof choozy).toBe('function')
  })

  document.body.innerHTML = `<nav class="js-nav">
    <button class="js-button js-toggle" />
    <ul class="list js-list">
      <li class="js-items" />
      <li class="js-items" />
      <li class="js-items" />
    </ul>
  </nav>`

  let instance1 = choozy()

  it('should return an object', () => {
    expect(typeof instance1).toBe('object')
  })

  it('should contain keys nav, button, toggle, list, and items', () => {
    let keys = Object.keys(instance1)
    expect(keys.length).toBe(5)
    expect(keys).toContain('nav')
    expect(keys).toContain('button')
    expect(keys).toContain('toggle')
    expect(keys).toContain('list')
    expect(keys).toContain('items')
  })

  it('should collect multiple elements with the same suffix into an array', () => {
    expect(Array.isArray(instance1.items)).toBeTruthy()
  })

  describe('param: container', () => {
    let container = document.querySelector('.list')
    let instance2 = choozy(container)

    it('should only query inside the provided container', () => {
      expect(Object.keys(instance2).length).toBe(1)
      expect(instance2['nav']).toBeFalsy()
      expect(instance2['button']).toBeFalsy()
      expect(instance2['list']).toBeFalsy()
    })
  })

  describe('param: prefix', () => {
    document.body.innerHTML = `
      <div class="foo-one" />
      <div class="foo-two" />
      <div class="foo-three" />
    `

    let instance3 = choozy(document.body, 'foo-')

    it('should select elements based on the provided prefix', () => {
      let keys = Object.keys(instance3)
      expect(keys.length).toBe(3)
      expect(keys).toContain('one')
      expect(keys).toContain('two')
      expect(keys).toContain('three')
    })
  })
})
