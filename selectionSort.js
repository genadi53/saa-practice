// O(n^2)

const n = 20;
const array = [];

const swap = (x, y) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

function selectionSort() {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    swap(i, min);
  }
}

function straight_selection(arr, n) {
  let i, j;
  let min;
  for (i = 0; i < n - 1; i++)
    for (j = i + 1; j < n; j++)
      if (arr[i] > arr[j]) {
        min = arr[i];
        arr[i] = arr[j];
        arr[j] = min;
      }
}

function selectionSort2(arr, n) {
  let i, j, min;
  for (i = 0; i < n - 1; i++) {
    min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    swap(min, i);
  }
}

for (let i = 0; i < n; i++) {
  array[i] = Math.round(Math.random() * 100);
}

document.write("array = ", array, "<br>");
//straight_selection(array, n);
//selectionSort2(array, n);
selectionSort();
document.write("array = ", array, "<br>");
