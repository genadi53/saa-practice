function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// O(nk)
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      bucket[digit].push(nums[i]);
    }
    nums = [].concat(...bucket);
  }
  return nums;
}

const array = [
  1234, 2345, 543, 67889, 67, 90, 7, 654, 32, 1, 123, 34, 987, 7654,
];
const res = radixSort(array);
console.log(res);
