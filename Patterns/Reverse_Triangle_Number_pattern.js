// 1 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3
// 4 4 4
// 5 5
// 6
let n = 6;
let pattern = "";
for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col <= n - row + 1; col += 1) {
    pattern += row;
    pattern += " ";
  }
  pattern += "\n";
}
console.log(pattern);
