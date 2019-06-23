function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const buffer = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > buffer) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = buffer;
  }
  return array;
}

module.exports = { insertionSort };
