// O(n^2)

const n = 20;
const array = [];

const swap = (x, y) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

const insertSort = () => {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1);
      j--;
    }
  }
};

for (let i = 0; i < n; i++) {
  array[i] = Math.round(Math.random() * 100);
}

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }
}

document.write("array = ", array, "<br>");
//insertSort();
insertionSort(array, n);
document.write("array = ", array, "<br>");
