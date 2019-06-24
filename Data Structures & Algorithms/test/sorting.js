const { bubbleSort } = require('../src/bubbleSort');
const { insertionSort } = require('../src/insertionSort');
const { mergeSort } = require('../src/mergeSort');

function generateArray() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * (100)));
  }
  return array;
}

function validateSorting(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      throw new Error('The array was not sorted properly');
    }
  }
}

describe('Sorting', () => {
  it('bubble sort', () => {    
    const sortedArray = bubbleSort(generateArray());
    validateSorting(sortedArray);
  });

  it('insertion sort', () => {
    const sortedArray = insertionSort(generateArray());
    validateSorting(sortedArray);
  });

  it('merge sort', () => {
    const sortedArray = mergeSort(generateArray());
    validateSorting(sortedArray);
  });

  it('quick sort', () => {
    const sortedArray = mergeSort(generateArray());
    validateSorting(sortedArray);
  })
});
