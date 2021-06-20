const insertionSort = (array) => {
  let counter = 0;
  let currentVal;
  for (let i = 1; i < array.length; i++) {
    currentVal = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      counter++;
      //   swap(array, j, min);
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return counter;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const array = [3, 4, 7, 1, 2, 8, 9, 10, 6, 5, 12, 18, 0];
let count = insertionSort(array);
console.log(array);
console.log(count);
