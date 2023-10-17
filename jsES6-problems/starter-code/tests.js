/* global describe, xdescribe, it */
/* eslint-disable no-undef */

const chai  = window.chai
const expect = chai.expect

describe('hello', () => {
  it('should return "Hello World!" if no argument is passed', () => {
    expect(hello()).to.equal('Hello World!')
  })
  it('should return "Hello <argument>!" if one is passed', () => {
    expect(hello('Mike')).to.equal('Hello Mike!')
  })
})

describe('areaOfCircle', () => {
  it('should find the area of a circle given a radius', () => {
    expect(areaOfCircle(4)).to.equal(50.26548245743669)
    expect(areaOfCircle(10)).to.equal(314.1592653589793)
    expect(areaOfCircle(1)).to.equal(3.141592653589793)
  })
})

describe('celciusToFarenheit', () => {
  it('should convert celcius to farenheit', () => {
    expect(celciusToFarenheit(0)).to.equal(32)
    expect(celciusToFarenheit(-40)).to.equal(-40)
    expect(celciusToFarenheit(100)).to.equal(212)
  })
})

describe('numberReverse', () => {
  it('should reverse a number', () => {
    expect(numberReverse(123)).to.equal(321)
    expect(numberReverse(4001)).to.equal(1004)
  })
  it('should handle decimals', () => {
    expect(numberReverse(78.567)).to.equal(765.87)
  })
})

describe('palindromeCheck', () => {
  it('should check if a word is a palindrome', () => {
    expect(palindromeCheck('pop')).to.be.true
    expect(palindromeCheck('dog')).to.be.false
  })
  it('should check if a phrase is a palindrome', () => {
    expect(palindromeCheck('nurses run')).to.be.true
    expect(palindromeCheck('will not work')).to.be.false
  })
})

describe('orderStringAlphabetically', () => {
  it('should order a word alphabetically', () => {
    expect(orderStringAlphabetically('happy')).to.equal('ahppy')
  })
  it('should order a phrase alphabetically', () => {
    expect(orderStringAlphabetically('javascript is cool')).to.equal('aacciijlooprsstv')
  })
  it('should be case insensive', () => {
    expect(orderStringAlphabetically('Testing Rocks')).to.equal('cegiknorsstt')
  })
})

describe('sumArray', () => {
  it('should find the total value of all elements in the array', () => {
    expect(sumArray([10, 9, 16])).to.equal(35)
  })
  it('should handle strings', () => {
    expect(sumArray(['10', '88', '1'])).to.equal(99)
  })
})

describe('frame', () => {
  it('should frame a string in asterisks', () => {
    expect(frame('Rumplestiltskin')).to.equal('*******************\n* Rumplestiltskin *\n*******************')
    expect(frame('Hello Kitty')).to.equal('***************\n* Hello Kitty *\n***************')
  })
})

describe('removeBlank', () => {
  it('should remove all falsy values EXCEPT 0 from an array', () => {
    expect(removeBlank([0, NaN, undefined, false, '', null, 'Kevin'])).to.deep.equal([0, 'Kevin'])
  })
  it('should be able to handle complex data types', () => {
    expect(removeBlank([0,[],{}])).to.deep.equal([0,[],{}])
  })
})

describe('randomElement', () => {
  it('should return a random element from an array', () => {
    expect(randomElement(['red', 'green', 'blue'])).to.be.oneOf(['red', 'green', 'blue'])
  })
  it('should be able to return any index', () => {
    let testIndexZeroCount = 0
    let testNoIndexZeroCount = 0
    let testLastIndexCount = 0
    for (let i = 0; i <= 20; i++) {
      randomElement([0, 1]) > 0 && ++testIndexZeroCount // Tests for failure to multiply Math.random
      randomElement([1, 0]) > 0 && ++testNoIndexZeroCount // Tests for use of Math.ceil instead of Math.floor
      randomElement([0, 0, 0, 0, 0, 0, 1]) > 0 && ++testLastIndexCount // Tests for use of array.length - 1
    }
    expect(testIndexZeroCount).to.not.equal(0)
    expect(testNoIndexZeroCount).to.not.equal(0)
    expect(testLastIndexCount).to.not.equal(0)
  })
})

describe('secondLowestSecondHighest', () => {
  it('should return the second highest and second lowest numbers of an array', () => {
    expect(secondLowestSecondHighest([99,2000,-93,40,-761115,11])).to.deep.equal([-93,99])
  })
})

describe('mergeUnique', () => {
  it('should merge two arrays', () => {
    expect(mergeUnique([1,2,3], [4,5,6])).to.deep.equal([1,2,3,4,5,6])
  })
  it('should remove duplicates', () => {
    expect(mergeUnique(['Mike', 'Emily', 'Eduardo'], ['Eduardo', 'Will', 'Emily'])).to.deep.equal(['Mike', 'Emily', 'Eduardo', 'Will'])
    expect(mergeUnique([5,10,15,20], [10,20,30,40])).to.deep.equal([5,10,15,20,30,40])
  })
})
