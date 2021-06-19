function hanoiTowers(n, x, y, z) {
  if (n > 0) {
    hanoiTowers(n - 1, x, z, y);
    document.write("move disk from ", x, " to ", y, "<br>");
    hanoiTowers(n - 1, z, y, x);
  }
}

hanoiTowers(5, "A", "B", "C");
