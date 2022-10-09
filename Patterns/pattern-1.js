// *****
// *****
// *****
// *****
// *****
let n = 5;
let patterns = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    patterns += "*";
  }
  patterns += "\n";
}
console.log(patterns);
