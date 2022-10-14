// 10
// 11 12
// 13 14 15
// 16 17 18 19
// 20 21 22 23 24
let pattern = "";
let n = 5,
  number = 10;

for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col <= row; col += 1) {
    pattern += number;
    pattern += " ";
    ++number;
  }
  pattern += "\n";
}
console.log(pattern);
