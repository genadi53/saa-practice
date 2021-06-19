// Изчисляване на интеграл (обем на сфера)
function volume(r, n) {
  var h = r / n;
  var v = 0;

  for (var i = 0; i < n; i++) {
    var y = (r * i) / n;
    var x = Math.sqrt(r * r - y * y);
    v = v + Math.PI * x * x * h;
  }

  return 2 * v;
}

var v0 = (4 / 3) * Math.PI * 1000;
document.write("обем ", v0, " при r=10");
document.write('<table border="1"><tr><th>n</th><th>обем</th><th>%</th></tr>');

for (var n = 1; n < 513; n = n * 2) {
  var v = volume(10, n);
  document.write("<tr><td>", n, "</td>");
  document.write("<td>", v, "</td>");
  document.write("<td>", Math.round((v / v0) * 1000) / 10, "%</td></tr>");
}

// Изчисляване на корена на tan(x)=0 в [2,4]
// чрез метода на Нютон

var f = Math.tan;
var eps = 0.0001;

function newton(x) {
  while (Math.abs(f(x)) > eps) {
    y = f(x);
    x = x - y / (1 + y * y);
    document.write(x, " ", x / Math.PI, "<br>");
  }

  return x;
}

var k = newton(4);
document.write(k, "<hr>");
document.write(Math.PI);
