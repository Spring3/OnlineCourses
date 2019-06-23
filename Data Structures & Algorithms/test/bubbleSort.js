const { bubbleSort } = require('../src/bubbleSort');

describe('Bubblesort', () => {
  it('should sort the array', () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * (100)));
    }

    const sortedArray = bubbleSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        throw new Error('The array was not sorted properly');
      }
    }
  })
});
