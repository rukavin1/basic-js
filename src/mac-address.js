const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  if (inputString.length !== 17) {
    return false;
  }
  const separate = inputString.split('-');

  if (separate.length !== 6) {
    return false;
  }

  for (const separ of separate) {
    if (separ.length !== 2) {
      return false;
    }

    for (const char of separate) {
      if (!/[0-9A-Fa-f]/.test(char)) {
        return false;
      }
    }
  }

  return true;
}
module.exports = {
  isMAC48Address
};
