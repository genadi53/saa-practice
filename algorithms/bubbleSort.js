// O(n^2)

const n = 20;
const array = [];

const swap = (x, y) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

const bubbleSort = () => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (a[j] < a[j - 1]) swap(j, j - 1);
    }
  }
};

function SortMehur(arr, n) {
  let i, j;
  for (i = 0; i < n - 1; ++i)
    for (j = 0; j < n - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
}

function SortMehurNew(arr, n) {
  let i, j, k;
  for (i = n; i > 0; i = k)
    for (k = j = 0; j < i; ++j) {
      if (arr[j] > arr[j + 1]) {
        let x = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = x;
        k = j;
      }
    }
}

const bubbleSort = (array) => {
  if (array.length <= 1) return array;
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  }
  return array;
};

for (let i = 0; i < n; i++) {
  array[i] = Math.round(Math.random() * 100);
}

document.write("array = ", array, "<br>");
SortMehur(array, n);
//SortMehurNew(array, n);
//bubbleSort();
document.write("array = ", array, "<br>");
