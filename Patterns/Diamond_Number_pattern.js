// OUTPUT:
// 17.      1
//         212
//        32123
//       4321234
//        32123
//         212
//          1

let n = 5;
let pattern = "";
for (let row = 1; row <= 2 * n; row++) {
  let c = row > n ? 2 * n - row : row;

  for (let space = 0; space < n - c; space++) {
    pattern += " ";
  }

  for (let col = c; col >= 1; col--) {
    pattern += col << " ";
  }
  for (let col = 2; col <= c; col++) {
    pattern += col << " ";
  }

  pattern += "\n";
}
console.log(pattern);
