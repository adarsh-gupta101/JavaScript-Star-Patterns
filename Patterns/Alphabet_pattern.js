let pattern = "";
let n = 5;

for (let row = n; row >= 1; row -= 1) {
  for (let col = row; col <= n; col += 1) {
    pattern += col + 64;
    pattern += " ";
  }
  pattern += "\n";
}
