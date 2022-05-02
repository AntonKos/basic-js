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
function createDreamTeam(members) {
  if (!Array.isArray(members) || (Array.isArray(members) && members.length === 0)) {
    return false
}
let resultArray = []
for (let i = 0; i < members.length; i++) {
    let element = members[i]
    if (typeof element === 'string') {
        element = element.trim()
        resultArray.push(element[0].toUpperCase())
    }
}
resultArray.sort()
return resultArray.join('')
}

module.exports = {
  createDreamTeam
};
