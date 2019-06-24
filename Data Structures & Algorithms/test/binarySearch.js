const expect = require('expect.js');

const { quickSort } = require('../src/quickSort');
const { binarySearch } = require('../src/binarySearch');

describe('Binary search', () => {
  it('should find the item in the sorted array', () => {
    const array = [];
    for (let i = 0; i < 99; i++) {
      array.push(Math.floor(Math.random() * (100)));
    }
    array.push(99); // ensure it's always there
    expect(binarySearch(quickSort(array), 99)).to.be(99);
    expect(binarySearch(quickSort(array), -1)).to.be(null);
  });
});
