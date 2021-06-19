// Изчисляване на sin(x) с ред на Макларън
// без оптимизация на броя операции

function sin(x) {
  var eps = 0.0000001;
  var y = 0;
  var n = 1;
  var delta = 1;
  var s = 1;
  var op = 0;
  while (delta > eps) {
    delta = 1;
    for (var i = 1; i <= n; i++) {
      delta = (delta * x) / i;
      op = op + 2;
    }
    y = y + s * delta;
    n = n + 2;
    s = -s;
    op = op + 4;
  }

  document.write("sin (", x, ")<ul>");
  document.write("<li>", Math.sin(x), " - изчислена стойност");
  document.write("<li>", y, " - приближена стойност");
  document.write("</ul>");
  return op;
}

document.write("брой операции ", sin(0), "<hr>");
document.write("брой операции ", sin(0.1), "<hr>");
document.write("брой операции ", sin(1), "<hr>");
document.write("брой операции ", sin(10), "<hr>");
document.write("брой операции ", sin(100));

// Изчисляване на sin(x) с ред на Макларън
// с оптимизация на броя операции

function sin(x) {
  var eps = 0.0000001;
  var y = x;
  var n = 2;
  var delta = x;
  var xx = -x * x;
  var op = 2;
  while (Math.abs(delta) > eps) {
    delta = (delta * xx) / n / (n + 1);
    y = y + delta;
    n = n + 2;
    op = op + 6;
  }

  document.write("sin (", x, ")<ul>");
  document.write("<li>", Math.sin(x), " - изчислена стойност");
  document.write("<li>", y, " - приближена стойност");
  document.write("</ul>");
  return op;
}

document.write("брой операции ", sin(0), "<hr>");
document.write("брой операции ", sin(0.1), "<hr>");
document.write("брой операции ", sin(1), "<hr>");
document.write("брой операции ", sin(10), "<hr>");
document.write("брой операции ", sin(100));

// Изчисляване на sin(100) с ред на Макларън
// с оптимизация на броя операции

var sin100 = Math.sin(100);
document.write("<br><hr>", "sin (100) = ", sin100);

var x = 100;
var eps = 0.0000001;
var y = x;
var n = 2;
var delta = x;
var xx = -x * x;
var op = 2;
while (n < 800) {
  delta = (delta * xx) / n / (n + 1);
  y = y + delta;

  //if (n%2000 == 0)
  document.write(n / 2, " ", y, ">>>>>>>", delta, "<br>");

  n = n + 2;
  op = op + 6;
}
