const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
  //   while (i < arr1.length) {
  //     result.push(arr1[i]);
  //     i++;
  //   }
  //   while (j < arr2.length) {
  //     result.push(arr2[j]);
  //     j++;
  //   }
  //   return result;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const array = [
  3, 4, 7, 1, 2, 8, 9, 10, 6, 5, 13, 15, 17, 16, 14, 19, 12, 18, 11, 20,
];
let res = mergeSort(array);
console.log(res);
