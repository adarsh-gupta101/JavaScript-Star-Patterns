// 17.    *        *
//        **      **
//        ***    ***
//        ****  ****
//        **********
//        ****  ****
//        ***    ***
//        **      **
//        *        *
let n = 5;
let k = 0;
let pattern = "";
for (let row = 1; row <= n; row += 1) {
  for (let col = 1; col <= row; col += 1) {
    pattern += "*";
  }

  let totalSpaces = 2 * n - 2 * row;

  for (let space = 1; space <= totalSpaces; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= row; col += 1) {
    pattern += "*";
  }
  pattern += "\n";
}

for (let row = n - 1; row >= 1; row -= 1) {
  for (let col = 1; col <= row; col += 1) {
    pattern += "*";
  }

  let totalSpaces = 2 * n - 2 * row;

  for (let space = 1; space <= totalSpaces; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= row; col += 1) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
