function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;
    
    for (let i = 0; i < array.length - 1; i ++) {      
      if (array[i] > array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buff;
        swapped = true;
      }
    }

  } while(swapped);
  return array;
}

module.exports = { bubbleSort };
