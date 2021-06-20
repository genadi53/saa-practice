const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const quickSort = (arr, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
};

const array = [
  3, 4, 7, 1, 2, 8, 9, 10, 6, 5, 13, 15, 17, 16, 14, 19, 12, 18, 11, 20,
];
let res = quickSort(array);
console.log(res);
