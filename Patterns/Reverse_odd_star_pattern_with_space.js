// *********
// *******
//  *****
//   ***
//    *
let n = 5;
let pattern = "";

for (let row = 1; row <= n; row += 1) {
  for (let space = 1; space <= row; space += 1) {
    pattern += " ";
  }

  let k = n * 2 - (2 * row - 1); // number of stars to prlet

  for (let col = 1; col <= k; col += 1) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
