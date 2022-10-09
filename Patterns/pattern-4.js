// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
let n = 5;
let pattern = "";

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    pattern += col;
    pattern += " ";
  }
  pattern += "\n";
}
console.log(pattern);
