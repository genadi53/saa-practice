// Пример 1
// Сортиране на Шел

let n = 20;
let array = [];

function shellSort() {
  let gap = n / 2; //n >> 1;
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j = i;
      while (j >= gap && temp < array[j - gap]) {
        array[j] = array[j - gap];
        j = j - gap;
      }
      array[j] = temp;
    }
    gap = gap / 2; //gap >> 1;
  }
}

// ???? need fix

function shellSort2(arr) {
  let n = arr.length;

  // Start with a big gap, then reduce the gap
  for (let gap = Math.round(n / 2); gap > 0; gap = Math.round(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    for (let i = gap; i < n; i++) {
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      let temp = arr[i];

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];

      // put temp (the original a[i]) in its correct
      // location
      arr[j] = temp;
    }
  }
  return 0;
}

for (let i = 0; i < n; i++) {
  array[i] = Math.round(100 * Math.random());
}

document.write("a = ", array, "<br>");
// shellSort();
shellSort2(array);
document.write("a = ", array);
