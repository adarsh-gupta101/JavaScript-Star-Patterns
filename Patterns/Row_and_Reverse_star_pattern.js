// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
let n = 5;
let pattern = "";
for (let row = 1; row <= 2 * n - 1; row += 1) {
  let totalCols = row > n ? 2 * n - row : row;
  for (let col = 1; col <= totalCols; col++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
