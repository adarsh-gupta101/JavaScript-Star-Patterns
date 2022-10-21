let n = 5;
let orignalN = n;
n = 2 * n - 2;
for (let row = 0; row <= n; row += 1) {
  for (let col = 0; col <= n; col += 1) {
    let atEveryIndex = orignalN - min(min(row, col), min(n - row, n - col));
    pattern += atEveryIndex;
    pattern += " ";
  }
  pattern += "\n";
}
