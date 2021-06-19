// Квадратен корен по метода на Херон (Вавилонски метод)
function sqrt(A) {
  document.write("√", A, " = ", Math.sqrt(A), "<ul>");
  document.write("<li>1");
  var x = 1;
  var y = 0;
  while (Math.abs(x - y) > 0.000001) {
    y = x;
    x = (x + A / x) / 2;
    document.write("<li>", x);
  }
  document.write("</ul>");
  return x;
}

sqrt(2019);

// Квадратен корен по Бакшлиския метод

function sqrt(A) {
  document.write("√", A, " = ", Math.sqrt(A), "<ul>");
  document.write("<li>1");
  var x = 1;
  var y = 0;
  while (Math.abs(x - y) > 0.000001) {
    y = x;
    var a = (A - x * x) / (2 * x);
    var b = x + a;
    x = b - (a * a) / (2 * b);
    document.write("<li>", x);
  }
  document.write("</ul>");
  return x;
}

sqrt(2019);
