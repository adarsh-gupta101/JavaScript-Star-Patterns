let n = 5;
let pattern = "";
for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col <= row; col += 1) {
    if ((row + col) % 2 == 1) pattern += 0 << " ";
    else pattern += 1 << " ";
  }
  pattern += "\n";
}
console.log(pattern);
