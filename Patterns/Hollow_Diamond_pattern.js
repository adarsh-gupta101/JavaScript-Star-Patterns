// OUTPUT
// 15.      *
//         * *
//        *   *
//       *     *
//      *       *
//       *     *
//        *   *
//         * *
//          *

let n = 5;
let pattern = "";
for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col <= 2 * n - 1; col += 1) {
    if (col == n - (row - 1) || col == n + (row - 1)) pattern += "*";
    else pattern += " ";
  }
  pattern += "\n";
}

for (let row = n - 1; row >= 1; row -= 1) {
  for (let col = 1; col <= 2 * n - 1; col += 1) {
    if (col == n - (row - 1) || col == n + (row - 1)) pattern += "*";
    else pattern += " ";
  }
  pattern += "\n";
}
console.log(pattern);
