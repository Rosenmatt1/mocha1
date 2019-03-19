const assert = require('chai').assert
const sayHello = require('../app').sayHello
// const app = require('../app.js')

describe('App', () => {
  it('sayHello should return hello', () => {
    assert.equal(sayHello(), "hello")
  })

  it('sayHello should return type string',() => {
    let result = sayHello()
    assert.typeOf(result, "string")
  })
})

