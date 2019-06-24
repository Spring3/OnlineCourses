// Pick a pivot item
// Comapre items to that pivot
// If an item is less than the pivot, put it in the left array, otherwise into right array
// return the array resulting from quickSort called on the left, the pivot, and quicksort on the right

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i];
    if (currentItem < pivot) {
      left.push(currentItem);
    } else {
      right.push(currentItem);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = { quickSort };
