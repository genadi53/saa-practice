// Complexity:   O(1)    best-case performance
//               O(log_2 (n))    worst-case performance
let arr = [100];

function binarySearch(arr, searchedVal) {
  let max = arr.length - 1;
  let min = 0;
  let half = 0;

  while (min <= max) {
    half = Math.round((min + max) / 2);
    if (arr[half] === searchedVal) return half;

    if (arr[half] < searchedVal) min = half + 1;
    else max = half - 1;
  }

  return -1;
}

arr[0] = Math.round(Math.random() * 3);
for (let i = 1; i < 100; i++) {
  //arr[i] = i;
  arr[i] = arr[i - 1] + Math.round(Math.random() * 3);
}

document.write(arr, "<br><hr>");
for (let i = 0; i < 20; i++) {
  let val = Math.round(Math.random() * 3) + i;
  //let val = i;
  let index = binarySearch(arr, val);
  if (index === -1) {
    document.write("Searched value ", val, " was not in the array <br>");
  } else {
    document.write("Searched value ", val, " was on index ", index, "<br>");
  }
}

// int bin_search(int arr[], int key, int low, int high)
// {
//     if (low > high)
//         return -1;

//     int mid = low + ((high - low) >> 1);

//     if (arr[mid] == key) return mid;
//     if (arr[mid] > key)
//         return bin_search(arr, key, low, mid - 1);
//     else
//         return bin_search(arr, key, mid + 1, high);
// }

// int lower_bound(int arr[], int key, int low, int high)
// {
//     if (low > high)
//         //return -1;
//         return low;

//     int mid = low + ((high - low) >> 1);
//     //if (arr[mid] == key) return mid;

//     //Attention here, we go left for lower_bound when meeting equal values
//     if (arr[mid] >= key)
//         return lower_bound(arr, key, low, mid - 1);
//     else
//         return lower_bound(arr, key, mid + 1, high);
// }

// int upper_bound(int arr[], int key, int low, int high)
// {
//     if (low > high)
//         //return -1;
//         return low;

//     int mid = low + ((high - low) >> 1);
//     //if (arr[mid] == key) return mid;

//     //Attention here, we go right for upper_bound when meeting equal values
//     if (arr[mid] > key)
//         return upper_bound(arr, key, low, mid - 1);
//     else
//         return upper_bound(arr, key, mid + 1, high);
// }
