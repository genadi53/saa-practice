// proverqvame sumata ot elementite ot glawniq diagonal
function sumDiagonal(array, n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += array[i][i];
  }

  return sum;
}

function printBelowDiagonal(array, n) {
  const unique = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let currentNum = array[i][j];
      if (!unique.includes(currentNum)) unique.push(currentNum);
    }
  }

  for (let n = 0; n < unique.length; n++) {
    console.log(unique[n]);
  }
}

function task(array, n) {
  let sum = sumDiagonal(array, n);

  if (sum > 100) {
    printBelowDiagonal(array, n);
  }
}

const n = 5;
const array = [];

for (let i = 0; i < n; i++) {
  array[i] = new Array(n);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    array[i][j] = (i + 1) * (j + 1);
  }
}
console.log(array);
//console.log(sumDiagonal(array, n));
// printBelowDiagonal(array, n);
task(array, n);
