const selectionSort = (array) => {
  let counter = 0;
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      counter++;
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  return counter;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const array = [3, 4, 7, 1, 2, 8, 9, 10, 6, 5, 12, 18, 0];
let count = selectionSort(array);
console.log(array);
console.log(count);
