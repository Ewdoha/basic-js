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

  if (!date) {

    return "Unable to determine the time of year!";

  } else if (Object.prototype.toString.call(date) !== '[object Date]') {

   
    try {
      throw new TypeError('Invalid date!');
    } catch (e) {
      Object.prototype.toString.call(date) === '[object Date]'; 
      e.message;
    }
    

  } else {

    let getMonth = date.getMonth();
    
    switch (getMonth) {
        case 0:
      return "winter";
      break;
        case 1:
      return "winter";
      break;
        case 2:
      return "spring";
      break;
        case 3:
      return "spring";
      break;
        case 4:
      return "spring";
      break;
        case 5:
      return "summer";
      break;
        case 6:
      return "summer";
      break;
        case 7:
      return "summer";
      break;
        case 8:
      return "autumn";
      break;
        case 9:
      return "autumn";
      break;
        case 10:
      return "autumn";
      break;
        case 11:
      return "winter";
      break;
    }
  }
}

module.exports = {
  getSeason
};
