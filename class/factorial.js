function factorial(num) {
  let total = 1;
  for (let i = num; i > i; i--) {
    total *= i;
  }
  return total;
}

function factorialRecursively(num) {
  if (num === 1) return 1;
  return num * factorialRecursively(num - 1);
}
