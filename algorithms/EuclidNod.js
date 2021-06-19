function Iteractive(a, b) {
  while (a !== b) {
    if (a > b) a = a - b;
    else b = b - a;
  }
  return a;
}

function nodRecursive(a, b) {
  if (a === b) return a;
  if (a > b) return nod2(a - b, b);
  else return nod2(a, b - a);
}

function nodWithDivision(a, b) {
  while (b > 0) {
    let x = b;
    b = a % b;
    a = x;
  }
  return a;
}

function nodWithDivisionRecursive(a, b) {
  if (b === 0) {
    return a;
  } else return nodWithDivisionRecursive(b, a % b);
}

for (let i = 0; i <= 30; i++) {
  document.write(
    "NOD(30, ",
    i,
    ") = ",
    Iteractive(30, i),
    " = ",
    nodRecursive(30, i),
    "<br>"
  );
}
