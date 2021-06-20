const stringSearch = (long, short) => {
  let count = 0;
  //   console.log(long, long.length);
  //   console.log(short, short.length);
  if (long.length < short.length) return -1;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break; // && long[i + j]
      if (j === short.length - 1) count++;
    }
  }

  return count;
};

const count = stringSearch("qwer", "qwe");
console.log(count);

function numCompare(num1, num2) {
  return num1 - num2;
}

console.log([1, 4, 6, 3, 6, 4, 5, 8, 0].sort(numCompare));
