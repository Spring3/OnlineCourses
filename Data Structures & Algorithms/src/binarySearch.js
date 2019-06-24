function binarySearch(array, value) {
  if (!array.length) return null;
  if (array.length === 1) {
    return array[0] === value ? value : null;
  }
  const middle = Math.floor(array.length / 2);
  if (array[middle] === value) {
    return value;
  }
  if (value <= array[middle]) {
    return binarySearch(array.slice(0, middle), value);
  }
  return binarySearch(array.slice(middle), value);
}

module.exports = { binarySearch };
