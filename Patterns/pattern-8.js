//     *
//    ***
//   *****
//  *******
// *********

let n = 5;
let pattern = "";

for (let row = 1; row <= n; row += 1) {
  let k = 2 * row - 1; // number of stars to prlet

  for (let space = 1; space <= n - row + 1; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= k; col += 1) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
