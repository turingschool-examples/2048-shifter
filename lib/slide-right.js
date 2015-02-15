module.exports = function slideRight(row, position) {
  
  "use strict";
 
  if (position >= row.length - 1) { return row; }

  var currentPosition = position || 0;
  var nextPosition = currentPosition + 1;

  var currentValue = row[currentPosition];
  var nextValue = row[nextPosition];

  var newRow = row.slice();

  if (!currentValue) {
    return slideRight(newRow, nextPosition);
  }

  if (currentValue && !nextValue) {
    newRow[nextPosition] = currentValue;
    newRow[currentPosition] = null;
    return slideRight(newRow, nextPosition);
  }

  if (currentValue === nextValue) {
    newRow[nextPosition] = currentValue + nextValue;
    newRow[currentPosition] = null;
    return slideRight(newRow, 0);
  }

  return slideRight(newRow, nextPosition);

};

