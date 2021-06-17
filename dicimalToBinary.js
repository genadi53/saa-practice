function transform(n) {
  if (n > 0) {
    transform(n >> 1);
    document.write(n % 2);
  }
}

document.write("<br>");
for (let i = 1; i <= 30; i++) {
  document.write(i, " = ");
  transform(i);
  document.write("<br>");
}
