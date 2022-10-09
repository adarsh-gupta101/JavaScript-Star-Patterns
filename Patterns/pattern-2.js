// *
// **
// ***
// ****
// *****
let n = 5;
let pattern = "";

for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col <= row; col += 1) pattern += "*";
  pattern += "\n";
}
console.log(pattern);
