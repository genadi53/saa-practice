// worst/avg case --> O(log n)
const binarySearch = (array, value) => {
  let left, right;
  left = 0;
  right = array.length - 1;

  let middle = Math.round((right + left) / 2); // math.floor

  while (left <= right && array[middle] !== value) {
    if (value < array[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.round((right + left) / 2);
  }

  return array[middle] === value ? middle : -1;
};

let arr = [
  1, 2, 4, 5, 7, 9, 11, 23, 56, 46, 68, 71, 89, 90, 99, 101, 123, 234, 345, 456,
];
let res = binarySearch(arr, 9);
console.log(res);
