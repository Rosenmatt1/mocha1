const assert = require('chai').assert
// const sayHello = require('../app').sayHello
// const addNumbers = require('../app').addNumbers
const app = require('../app.js')

describe('App', () => {
  it('sayHello should return hello', () => {
    assert.equal(app.sayHello(), "hello")
  })

  it('sayHello should return type string',() => {
    let result = app.sayHello()
    assert.typeOf(result, "string")
  })

  it('addNumbers should be greater than 5', () => {
    let result = app.addNumbers(4,7)
    assert.isAbove(result, 5)
  })

  it('addNumbers should be a number', () => {
    let result = app.addNumbers(4, 7)
    assert.typeOf(result, "number")
  })

})

