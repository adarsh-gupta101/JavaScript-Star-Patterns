// OUTPUT:
// 18.
// ****
// *  *
// *  *
// *  *
// ****

let n = 5;
let pattern = "";

for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col < n; col += 1) {
    if (row == 1 || row == n || col == 1 || col == n - 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}
console.log(pattern);
