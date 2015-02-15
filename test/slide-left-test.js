var assert = require('assert');
var slideLeft = require('../lib/slide-left');

describe('slideLeft', function () {
  
  it('should move a single element to the left', function () {
    
    var expectedOutput = [2, null, null, null];

    assert.deepEqual (slideLeft([null, null, 2, null]), expectedOutput);
    assert.deepEqual(slideLeft([2, null, null, null]), expectedOutput);
    assert.deepEqual(slideLeft([null, null, null, 2]), expectedOutput);

  });

  it('should combine similar values', function () {
    
    var expectedOutput = [4, null, null, null];

    assert.deepEqual(slideLeft([null, null, 2, 2]), expectedOutput);

  });

  it('should combine similar values and slide the rest', function () {
    
    var expectedOutput = [4, 8, null, null];

    assert.deepEqual(slideLeft([2, 2, 8, null]), expectedOutput);

  });

});
