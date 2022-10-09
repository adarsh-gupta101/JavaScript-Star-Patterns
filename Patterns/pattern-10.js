// OUTPUT:

//  * * * * *
//   * * * *
//    * * *
//     * *
//      *
//    	*
//     * *
//    * * *
//   * * * *
//  * * * * *
let n = 5;
let pattern = "";

for (let row = 1; row <= 2 * n; row += 1) {
  let totalSpaces = row > n ? 2 * n - row + 1 : row;
  let totalCols = row > n ? row - n : n - row + 1;

  for (let space = 1; space <= totalSpaces; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= totalCols; col += 1) {
    pattern += "* ";
  }

  pattern += "\n";
}
console.log(pattern);
