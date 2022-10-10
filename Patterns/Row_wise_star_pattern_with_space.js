//    *
//   **
//  ***
// ****
//*****
let n = 5;
let pattern = "";

for (let row = 1; row <= n; row++) {
  for (let space = 1; space <= n - row; space++) {
    pattern += " ";
  }
  for (let i = 1; i <= row; i++) pattern += "*";
  pattern += "\n";
}
console.log(pattern);
