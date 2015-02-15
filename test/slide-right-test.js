var assert = require('assert');
var slideRight = require('../lib/slide-right');

describe('slideRight', function () {
  
  it('should move a single element to the right', function () {
    
    var expectedOutput = [null, null, null, 2];

    assert.deepEqual (slideRight([null, null, 2, null]), expectedOutput);
    assert.deepEqual(slideRight([2, null, null, null]), expectedOutput);
    assert.deepEqual(slideRight([null, null, null, 2]), expectedOutput);

  });

  it('should combine similar values', function () {
    
    var expectedOutput = [null, null, null, 4];

    assert.deepEqual(slideRight([null, null, 2, 2]), expectedOutput);

  });

  it('should combine similar values and slide the rest', function () {
    
    var expectedOutput = [null, null, 8, 4];

    assert.deepEqual(slideRight([null, 8, 2, 2]), expectedOutput);

  });

});
