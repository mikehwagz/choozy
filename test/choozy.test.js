const choozy = require('../dist/choozy')

describe('choozy:', () => {
  it('should be a function', () => {
    expect(typeof choozy).toBe('function')
  })

  let html = `<nav ref="nav">
    <button ref="button" />
    <ul class="list" ref="list">
      <li ref="items" />
      <li ref="items" />
      <li ref="items" />
    </ul>
  </nav>`

  document.body.innerHTML = html

  let instance1 = choozy()

  it('should return an object', () => {
    expect(typeof instance1).toBe('object')
  })

  it('should contain keys nav, button, list, and items', () => {
    let keys = Object.keys(instance1)
    expect(keys.length).toBe(4)
    expect(keys).toContain('nav')
    expect(keys).toContain('button')
    expect(keys).toContain('list')
    expect(keys).toContain('items')
  })

  it('should collect multiple elements with the same suffix into an array', () => {
    expect(Array.isArray(instance1.items)).toBeTruthy()
  })

  describe('param: container', () => {
    // reset html
    document.body.innerHTML = html

    let container = document.querySelector('.list')
    let instance2 = choozy(container)

    it('should only query inside the provided container', () => {
      expect(Object.keys(instance2).length).toBe(1)
      expect(instance2['nav']).toBeFalsy()
      expect(instance2['button']).toBeFalsy()
      expect(instance2['list']).toBeFalsy()
    })
  })
})
