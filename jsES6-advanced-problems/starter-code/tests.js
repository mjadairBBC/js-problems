/* global describe, describe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('arrayToObjects', () => {
  it('should convert an array of strings to an array of objects', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city')[0]).to.be.an('object')
  })
  it('should have one object for each string in the original array', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city').length).to.equal(2)
  })
  it('each object should have the supplied key, and the value of the original array', () => {
    expect(arrayToObjects(['Paris', 'New York'], 'city')[0].city).to.equal('Paris')
    expect(arrayToObjects(['Paris', 'New York'], 'city')[1].city).to.equal('New York')
  })
})

describe('objectToArray', () => {
  it('should convert an object into an array', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })).to.be.an('array')
  })
  it('should have one array element for each key/value pair', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' }).length).to.equal(2)
  })
  it('each element should be an array of two elements', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0].length).to.equal(2)
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1].length).to.equal(2)
  })
  it('should contain the data in the correct format', () => {
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[0]).to.deep.equal(['name', 'Will Smith'])
    expect(objectToArray({ name: 'Will Smith', dob: '15-09-1968' })[1]).to.deep.equal(['dob', '15-09-1968'])
  })
})

describe('numOfOccurances', () => {
  it('should return the number of occurances of each letter of a string', () => {
    expect(numOfOccurances('this is great')).to.deep.equal({ t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 })
  })
  it('should be case insensive', () => {
    expect(numOfOccurances('Feeling Like A Pro')).to.deep.equal({ f: 1, e: 3, l: 2, i: 2, n: 1, g: 1, k: 1, a: 1, p: 1, r: 1, o: 1 })
  })
})

describe('eggsBreakie', () => {
  it('should fill every element of an array, other than the first and last, with the word \'Eggs', () => {
    expect(eggsBreakie([ 'Bacon', 'Salmon', 'Bagel', 'Croissant', 'Tea', 'Coffee' ])).to.deep.equal([ 'Bacon', 'Eggs', 'Eggs', 'Eggs', 'Eggs', 'Coffee' ])
    expect(eggsBreakie([ 'Porridge', 'Banana', 'Granola', 'Cinnamon Bun' ])).to.deep.equal([ 'Porridge', 'Eggs', 'Eggs', 'Cinnamon Bun' ])
    expect(eggsBreakie([ 'Oats', 'Apple', 'Croissant', 'Cinnamon Bun', 'Grapefruit', 'Avocado', 'Muffin', 'Pastry', 'Pain au Chocolat' ])).to.deep.equal([ 'Oats', 'Eggs', 'Eggs', 'Eggs', 'Eggs', 'Eggs', 'Eggs', 'Eggs', 'Pain au Chocolat' ])
  })
})

describe('itemsCount', () => {
  it('should be a number', () => {
    expect(itemsCount(5, [1, 4, 'hello'], true)).to.be.a('number')
  })
  it('should be number of items', () => {
    expect(itemsCount(5, [1, 4, 'hello'], true)).to.equal(5)
    expect(itemsCount(false, [['hi' ,5 , [20 , 25, 30]], 4], 'nice')).to.equal(8)
  })
})

describe('daysBetween', () => {
  it('should return the number of days between two dates', () => {
    expect(daysBetween('2017-02-01', '2017-01-01')).to.equal(31)
  })
  it('should not return negative numbers', () => {
    expect(daysBetween('2017-01-01', '2017-02-01')).to.equal(31)
  })
})

describe('fibonacci', () => {
  it('should return the first n fibonacci numbers', () => {
    expect(fibonacci(7)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13])
    expect(fibonacci(0)).to.deep.equal([0])
    expect(fibonacci(49)).to.deep.equal([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,1134903170,1836311903,2971215073,4807526976,7778742049])
  })
})

describe('coins', () => {
  it('should return the coins needed to make up the price supplied', () => {
    expect(coins(1.50)).to.deep.equal([100, 50])
  })
  it('should use the smallest number of coins possible', () => {
    expect(coins(1.99)).to.deep.equal([100, 50, 20, 20, 5, 2, 2])
    expect(coins(2.88)).to.deep.equal([100, 100, 50, 20, 10, 5, 2, 1])
  })
})
