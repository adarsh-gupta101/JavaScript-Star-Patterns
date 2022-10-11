// *****
// ****
// ***
// **
// *
let n = 5;
let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 5; col >= row; col--) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
