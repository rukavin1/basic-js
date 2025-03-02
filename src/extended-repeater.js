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
function repeater(str, options = {}) {
  str = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator === undefined ? '+' : options.separator;
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  let additionResult = '';
  if (addition) {
    const additionParts = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionParts.push(addition);
    }
    additionResult = additionParts.join(additionSeparator);
  }

  const resultParts = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultParts.push(str + additionResult);
  }

  return resultParts.join(separator);
}

module.exports = {
  repeater
};
