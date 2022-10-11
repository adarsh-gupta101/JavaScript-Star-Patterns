// HOW TO GET ODD NUMBER COLS IN SEQUENTIAL ORDER :  (2 * row - 1)

// OUTPUT
// 11.      *
//         * *
//        *   *
//       *     *
//      *********
let n = 5;
let pattern = "";

for (let row = 1; row <= n; row += 1) {
  for (let space = 1; space <= n - row + 1; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= 2 * row - 1; col += 1) {
    if (row == n || col == 1 || col == 2 * row - 1) pattern += "*";
    else pattern += " ";
  }

  pattern += "\n";
}
console.log(pattern);
