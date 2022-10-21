//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//    * * * *
//    * * *
//     * *
//      *

let pattern = "";
let n = 5;

for (let row = 1; row <= 2 * n - 1; row += 1) {
  let totalCols = row > n ? 2 * n - row : row;
  let totalSpaces = n - totalCols;
  for (let spaces = 1; spaces <= totalSpaces; spaces += 1) {
    pattern += " ";
  }
  for (let i = 1; i <= totalCols; i += 1) {
    pattern += " *";
  }
  pattern += "\n";
}
