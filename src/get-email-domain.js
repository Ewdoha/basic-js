const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let toArr = email.split('');
  let index = 0;
  let length = toArr.length;
  
  for (let i = 0; i < toArr.length; i++) {
    if (toArr[i] === '@') {
      index = [i + 1];
    }
  }
 let result = toArr.slice(index).join("");
 return result;
}

module.exports = {
  getEmailDomain
};
