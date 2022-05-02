const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
 
  if ((typeof str) !== 'string') {
    str = String(str)
}
// if () {

// }

if (!options.repeatTimes) {
    options.repeatTimes = 1
}
if (!options.separator) {
    options.separator = '+'
}
if (options.separator && typeof(options.separator) !== 'string') {
    options.separator = String(options.separator)
}
if (options.addition && typeof(options.addition) !== 'string') {
    options.addition = String(options.addition)
}
if (options.addition === false || options.addition === null) {
    options.addition = String(options.addition)
}
if (!options.additionSeparator) {
    options.additionSeparator = '|'
}
if (options.additionSeparator && typeof(options.additionSeparator) !== 'string') {
    options.additionSeparator = String(options.additionSeparator)
}
if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
}

let rpt = ''
let rptAdditional = ''

for (let i = 0; i < options.repeatTimes; i++) {
    if (i === options.repeatTimes - 1 || options.repeatTimes === 1) {
        if (options.addition) {
            for (let i = 0; i < options.additionRepeatTimes; i++) {
                if (i === options.additionRepeatTimes - 1) {
                    rptAdditional += options.addition
                } else {
                    rptAdditional += (options.addition + options.additionSeparator)
                }
            }
            rpt += (str + rptAdditional)
        } else {
            rpt += str
        }
    } else {
        if (options.addition) {
            for (let i = 0; i < options.additionRepeatTimes; i++) {
                if (i === options.additionRepeatTimes - 1) {
                    rptAdditional += options.addition
                } else {
                    rptAdditional += (options.addition + options.additionSeparator)
                }
            }
            rpt += (str + rptAdditional + options.separator)
        } else {
            rpt += (str + options.separator)
        }
    }
    rptAdditional = ''
}

return rpt;
}

module.exports = {
  repeater
};
