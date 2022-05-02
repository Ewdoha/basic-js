const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */members) {

  if (!Array.isArray(members)){
    return false;
    //console.log( false);
  } else {
    let arr =[];
    let firstLetters = '';
    let getStringMembers = members.filter(member => typeof(member) === "string");
    let deleteWhiteSpaces = getStringMembers.forEach(member => arr.push(member.replace(/\s+/g, '')));
    let sort = arr.forEach(member => firstLetters += member.toUpperCase().slice(0,1));
    let result = firstLetters.split("").sort().join("");
    return result;
    //console.log( result);
  }
  /*throw new NotImplementedError('Not implemented');*/
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
