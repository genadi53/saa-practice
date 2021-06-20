const bubbleSort = (array, n) => {
  let counter = 0;
  let noSwaps = true;
  for (let i = n; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      counter++;
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return counter;
};

const bubbleSortNotOptimised = (array, n) => {
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      counter++;
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return counter;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const array = [3, 4, 7, 1, 2, 8, 9, 10, 6, 5];
const array2 = [3, 4, 7, 1, 2, 8, 9, 10, 6, 5];

let count1 = bubbleSortNotOptimised(array, array.length);
let count2 = bubbleSort(array2, array2.length);
console.log(array);
console.log(array2);
console.log(count1, count2);
