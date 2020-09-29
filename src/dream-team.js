const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let res = '';
  members.map((el) => {
    if (typeof el == 'string') {
      res += el.trim()[0].toUpperCase();
    }
  });
  return res.split('').sort().join('');
};