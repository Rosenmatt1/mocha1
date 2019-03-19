const assert = require('chai').assert
const sayHello = require('../app').sayHello
// const app = require('../app.js')

describe('App', () => {
  it('app should return hello', () => {
    assert.equal(sayHello(), "hello")
  })
})

