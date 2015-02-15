var slideRight = require('./slide-right');

module.exports = function (row) {
  var reversedRow = row.slice().reverse();
  return slideRight(reversedRow).reverse();
};
