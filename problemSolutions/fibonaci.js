function fibonaci(n) {
  let a = 0;
  let b = 1;
  let c = 0;

  for (let i = 0; i < n - 1; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function BineFormula(n) {
  let phi = (Math.sqrt(5) + 1) / 2;
  f = (Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5);
  return f;
}

function fibonaciRecursive(n) {
  let a;
  if (n <= 0) return 0;
  if (n < 3) a = 1;
  else a = fibonaciRecursive(n - 1) + fibonaciRecursive(n - 2);
  return a;
}

function fibonaciRecursive(n) {
  let a;
  if (n < 3) a = 1;
  else a = fibonaciRecursive(n - 1) + fibonaciRecursive(n - 2);
  return a;
}

let memo = [100];
function fibonaciRecursiveWithMemoization(n) {
  if (n <= 0) return 0;
  if (n < 3) return 1;

  if (memo[n]) return memo[n];
  else {
    memo[n] =
      fibonaciRecursiveWithMemoization(n - 1) +
      fibonaciRecursiveWithMemoization(n - 2);
  }

  return memo[n];
}

document.write("iteractive way = ", fibonaci(60));
document.write("<br><hr>");
// document.write("recursive way = ", fibonaciRecursive(40));
// document.write("<br><hr>");
document.write(
  "recursive with memoization  = ",
  fibonaciRecursiveWithMemoization(60)
);
// document.write("<br><hr>");
// document.write("with Bine formula way = ", BineFormula(45));
