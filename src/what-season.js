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
function getSeason(/* date */) {
  if (!date) {
    console.log('Unable to determine the time of year!');
    //return 'Unable to determine the time of year!';
  } else if (typeof(date) === 'number' || typeof(date) === 'string' || typeof(date) === 'boolean') {
    console.log(`${'(Error)'} ${'Invalid date!'}`);
    //return `${'(Error)'} ${'Invalid date!'}`;
  } else {
    switch (date.getMonth()) {
        case 1:
      console.log("Winter");
      break;
        case 2:
      console.log("Winter");
      break;
        case 3:
      console.log("Spring");
      break;
        case 4:
      console.log("Spring");
      break;
        case 5:
      console.log("Spring");
      break;
        case 6:
      console.log("Summer");
      break;
        case 7:
      console.log("Summer");
      break;
        case 8:
      console.log("Summer");
      break;
        case 9:
      console.log("Autumn");
      break;
        case 10:
      console.log("Autumn");
      break;
        case 11:
      console.log("Autumn");
      break;
        case 12:
      console.log("winter");
      break;
    }
  }
}

module.exports = {
  getSeason
};
