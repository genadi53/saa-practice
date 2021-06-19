// O(n logn)

let n = 20;
let array = [];

function mergeSort() {
  function merge(i, m, j) {
    let iLeft = i;
    let iRight = m + 1;
    let bIndex = 0;

    let resArr = []; // резултатен масив

    // обхождане на двете части на масива
    while (iLeft <= m && iRight <= j) {
      if (array[iLeft] < array[iRight]) {
        resArr[bIndex] = array[iLeft];
        iLeft++;
      } else {
        resArr[bIndex] = array[iRight];
        iRight++;
      }
      bIndex++;
    }

    // обработване на двете части,
    // ако в някоя са останали елементи
    while (iLeft <= m) {
      resArr[bIndex] = array[iLeft];
      iLeft++;
      bIndex++;
    }
    while (iRight <= j) {
      resArr[bIndex] = array[iRight];
      iRight++;
      bIndex++;
    }

    // копиране на слетия масив обратно в a
    for (let k = i; k <= j; k++) array[k] = resArr[k - i];
  }

  function mSort(i, j) {
    if (i < j) {
      let m = (i + j) >> 1;
      mSort(i, m);
      mSort(m + 1, j);
      merge(i, m, j);
    }
  }

  mSort(0, n - 1);
}

const merge = (left, right) => {
  let result = [],
    lIndex = 0,
    rIndex = 0;
  while (lIndex < left.length && rIndex < right.length) {
    if (left[lIndex] < right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      rIndex++;
    }
  }
  return [...result, ...left.slice(lIndex), ...right.slice(rIndex)];
};
const mergeSort2 = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort2(left), mergeSort2(right));
};

// генериране на масив
for (var i = 0; i < n; i++) {
  array[i] = Math.round(100 * Math.random());
}

document.write("a = ", array, "<br>");
mergeSort();
let resArr = mergeSort2(array);

document.write("a = ", array);
document.write("b = ", resArr);
