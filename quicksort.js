// avg -> O(n*log n), worst -> O(n^2)

let n = 20;
let array = [];

function swap(i, j) {
  let x = array[i];
  array[i] = array[j];
  array[j] = x;
}

function quickSort() {
  function swap(i, j) {
    let x = array[i];
    array[i] = array[j];
    array[j] = x;
  }

  function rearrange(i, j) {
    let x = array[(i + j) >> 1];
    while (i <= j) {
      while (array[i] < x) i++;
      while (array[j] > x) j--;

      if (i <= j) {
        swap(i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function qSort(i, j) {
    if (i < j) {
      let m = rearrange(i, j);
      qSort(i, m - 1);
      qSort(m, j);
    }
  }

  qSort(0, n - 1);
}

function quickSort2() {
  function swap(i, j) {
    let x = array[i];
    array[i] = array[j];
    array[j] = x;
  }

  function rearrange(i, j) {
    swap((i + j) >> 1, j);

    let x = array[j];
    let m = i;

    for (; i < j; i++) {
      if (array[i] < x) {
        swap(i, m);
        m++;
      }
    }
    swap(j, m);
    return m;
  }

  function qSort(i, j) {
    if (i < j) {
      let m = rearrange(i, j);
      qSort(i, m - 1);
      qSort(m + 1, j);
    }
  }

  qSort(0, n - 1);
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partitionV(array, low, high) {
  let pivot = array[high];
  // Index of smaller element and
  // indicates the right position of pivot found so far
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(i, j);
    }
  }
  swap(i + 1, high);
  return i + 1;
}

function quickSortV(array, low, high) {
  if (low < high) {
    let p = partitionV(array, low, high);
    quickSortV(array, low, p - 1);
    quickSortV(array, p + 1, high);
  }
}

// TESTS
for (let i = 0; i < n; i++) {
  array[i] = Math.round(100 * Math.random());
}

document.write("a = ", array, "<br>");
// quickSortTP(array, 0, a.length - 1);
quickSortV(array, 0, array.length - 1);
document.write("a = ", array);
