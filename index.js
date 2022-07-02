let n = 5;
let pattern = "";

for (let i = 0; i < n; i++) {
  // external
  for (let j = 0; j < n; j++) {
    // internal
    pattern += "*";
  }
  // newline after each row
  pattern += "\n";
}
console.log(pattern);
