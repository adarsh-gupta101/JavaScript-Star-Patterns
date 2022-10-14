// 1 2 3 4  17 18 19 20
// 5 6 7  14 15 16
//   8 9  12 13
//     10 11

let n = 4;
let pattern = "";
let count = 1,
  count2 = n * n + 1;

for (let row = 1; row <= n; row += 1) {
  for (let space = 1; space <= row; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= n + 1 - row; col += 1) {
    pattern += count++;
    pattern += " ";
  }
  for (let col = 1; col <= n + 1 - row; col += 1) {
    pattern += count2++;
    pattern += " ";
  }
  count2 = count2 - 2 * (n - row) - 1;
  pattern += "\n";
}
console.log(pattern);
