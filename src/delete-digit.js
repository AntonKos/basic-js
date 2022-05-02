const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = String(n).split('')
  array = array.map(Number)
  let min = +array[0]
  for (let i = 0; i < array.length; i++) {
      const element = +array[i]
      if (element < min) {
          min = element
      }
  }
  array.splice(array.indexOf(min), 1)
  return +array.join('')
}

module.exports = {
  deleteDigit
};
