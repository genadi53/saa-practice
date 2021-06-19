let arrLength = 20;
let array = [];

// create max heap
function maxHeap(array, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && array[left] > array[max]) {
    max = left;
  }

  if (right < arrLength && array[right] > array[max]) {
    max = right;
  }

  if (max != i) {
    swap(array, i, max);
    maxHeap(array, max);
  }
}

function swap(array, indexA, indexB) {
  const temp = array[indexA];

  array[indexA] = array[indexB];
  array[indexB] = temp;
}

function heapSort(array) {
  arrLength = array.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(array, i);
  }

  for (i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    arrLength--;

    maxHeap(array, 0);
  }
  return;
}

for (let i = 0; i < arrLength; i++) {
  array[i] = Math.round(100 * Math.random());
}

document.write("a = ", array, "<br>");
let sortedArray = heapSort(array);
document.write("a = ", array);
