// Решаване на линейно уравнение с 1 променлива
function LU(a, b, c) {
  document.write("<br>", a, "x", b >= 0 ? "+" : "", b, "=0<br>");
  if (a == 0) {
    if (b == 0) document.write("всяко x е решение<br>");
    else document.write("няма решение<br>");
  } else document.write("решението е x=", -b / a, "<br>");
}

for (i = 1; i < 10; i++) {
  var a = Math.round(Math.random() * 10 - 5);
  var b = Math.round(Math.random() * 10 - 5);
  var c = Math.round(Math.random() * 10 - 5);
  LU(a, b, c);
}
