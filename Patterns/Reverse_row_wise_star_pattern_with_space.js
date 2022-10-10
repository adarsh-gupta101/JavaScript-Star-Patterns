// *****
//  ****
//   ***
//    **
//     *
let n = 5;
let pattern = "";

for (let row = 1; row <= n; row++) {
  for (let space = 1; space <= row - 1; space++) {
    pattern += " ";
  }
  for (let i = 1; i <= n - row + 1; i++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
