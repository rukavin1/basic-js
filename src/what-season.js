const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const month = date.getMonth();
  if (month >= 3 && month < 6) {
    return 'spring'
  }
  if (month >= 6 && month <= 8 ) {
    return 'summer'
  }
  if (month >= 9 && month <= 11) {
    return 'autumn'
  }
  else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
