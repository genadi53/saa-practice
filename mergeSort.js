// Пример 4
// Сортиране чрез сливане

let n = 20;
let array = [];

function mergeSort() {
  function merge(i, m, j) {
    var iLeft = i;
    var iRight = m + 1;
    var bIndex = 0;

    var b = []; // резултатен масив

    // обхождане на двете части на масива
    while (iLeft <= m && iRight <= j) {
      if (a[iLeft] < a[iRight]) {
        b[bIndex] = a[iLeft];
        iLeft++;
      } else {
        b[bIndex] = a[iRight];
        iRight++;
      }
      bIndex++;
    }

    // обработване на двете части,
    // ако в някоя са останали елементи
    while (iLeft <= m) {
      b[bIndex] = a[iLeft];
      iLeft++;
      bIndex++;
    }
    while (iRight <= j) {
      b[bIndex] = a[iRight];
      iRight++;
      bIndex++;
    }

    // копиране на слетия масив обратно в a
    for (var k = i; k <= j; k++) a[k] = b[k - i];
  }

  function mSort(i, j) {
    if (i < j) {
      var m = (i + j) >> 1;
      mSort(i, m);
      mSort(m + 1, j);
      merge(i, m, j);
    }
  }

  mSort(0, n - 1);
}

// генериране на масив
for (var i = 0; i < n; i++) {
  a[i] = Math.round(100 * Math.random());
}

document.write("a = ", a, "<br>");

mergeSort();

document.write("a = ", a);
