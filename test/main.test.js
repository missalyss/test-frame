const chai = require('chai')
const assert = chai.assert
const dailyPlanner = require('../src/main')

describe('.dailyPlanner', function() {
  it('should return type string', function() {
    var result = dailyPlanner()
    assert.isString(result, 'Not a string. Dumbass')
  })
  it('should have only one optional parameter', function() {
    assert.equal(dailyPlanner.length, 1)
  })
  it('should make sure that any arguments passed through turn lowercase', function() {
    var actual = dailyPlanner('MONDAY')
    var expected = 'working'
    assert.equal(actual, expected)
  })
  it('should return string "working" if "monday", "tuesday", "wednesday", or "thursday" is passed in', function() {
    var actual = dailyPlanner('monday')
    var actual1 = dailyPlanner('tuesday')
    var actual2 = dailyPlanner('wednesday')
    var actual3 = dailyPlanner('thursday')
    var expected = 'working'
    assert.equal(actual, expected, "You forgot to make 'monday'!")
    assert.equal(actual1, expected, "You forgot to make 'tuesday'!")
    assert.equal(actual2, expected, "You forgot to make 'wednesday'!")
    assert.equal(actual3, expected, "You forgot to make 'thursday'!")
  })
  it('should return string "TGIF!" if "friday" is passed in', function() {
    var actual = dailyPlanner('friday')
    var expected = 'TGIF!'
    assert.equal(actual, expected)
  })
  it('should return string "Weekend🍾" if "saturday" or "sunday" is passed in', function() {
    var actual = dailyPlanner('saturday')
    var actual1 = dailyPlanner('sunday')
    var expected = 'Weekend🍾'
    assert.equal(actual, expected)
    assert.equal(actual1, expected)
  })
  it('should return error "That is not a day" if a non-day string is passed through', function() {
    var actual = dailyPlanner('dog')
    var expected = 'That is not a day'
    assert.equal(actual, expected)
  })
})
