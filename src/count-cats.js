const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  let cats = backyard.reduce((x,y) => x.concat(y),[]);
  cats.forEach(element => {
    if (element === '^^') {
      count ++;
    }
  });
  return count;
};
