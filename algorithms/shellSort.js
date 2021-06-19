// Пример 1
// Сортиране на Шел

let n = 20;
let array = [];

function shellSort() {
  let gap = n >> 1;
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
    gap = gap >> 1;
  }
}

function shellSort2(arr) {
  let n = arr.length;
  let first = true;
  // Start with a big gap, then reduce the gap
  for (let gap = n / 2; gap > 0; gap = Math.round(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    if (gap === 1) {
      if (first) {
        first = false;
      } else {
        gap = 0;
        first = false;
      }
    }

    for (let i = gap; i < n; i++) {
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      let temp = arr[i];

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      let j;
      console.log("22222222222222222222222");
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        console.log("333333333333333333333333333");
        arr[j] = arr[j - gap];
      }

      // put temp (the original a[i]) in its correct
      // location
      arr[j] = temp;
    }
  }
  return 0;
}

// const shellSort = (array,gaps) => {
// 	for (var g = 0; g < gaps.length; g++) {
// 		var gap = gaps[g]
// 		for (var i = gap; i < array.length; i++) {
// 			var temp = array[i]
// 			for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
// 				array[j] = array[j - gap]
// 			}
// 			array[j] = temp
// 		}
// 	}
// 	return array
// }

// void shellsort(int a[], int left, int right)
// 	//left - най-малкия индекс на масива
// 	//right - най-големия индекс на масива
// {
//    int h;     //стъпка
//    for (h=1; h<=(right-left)/9; h=3*h+1)//изчисляване на h
//      for(;h>0;h/=3)      //сортиране по серии със стъпка h
// 	 for (int i=left+h; i<=right; i++)
// 		{
// 		  int j=i; int v=a[i];
// 		  while (j>=left+h && v<a[j-h])
// 		    {a[j]=a[j-h];j-=h;}
//               a[j]=v;
// 		}
// }

for (let i = 0; i < n; i++) {
  array[i] = Math.round(100 * Math.random());
}

document.write("a = ", array, "<br>");
// shellSort();
shellSort2(array);
document.write("a = ", array);
