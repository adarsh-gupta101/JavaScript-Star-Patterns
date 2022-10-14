// *********
// *     *
//  *   *
//   * *
//    *

let n = 5;
let pattern = "";

for (let row = 1; row <= n; row += 1) {
  for (let space = 1; space <= row; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= n * 2 - (2 * row - 1); col += 1) {
    if (row == 1 || col == 1 || col == n * 2 - (2 * row - 1)) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  pattern += "\n";
}
console.log(pattern);
