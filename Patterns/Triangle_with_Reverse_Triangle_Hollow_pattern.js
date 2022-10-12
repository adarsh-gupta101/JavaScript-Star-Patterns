// OUTPUT:
// 18.   **********
//       ****  ****
//       ***    ***
//       **      **
//       *        *
//       *        *
//       **      **
//       ***    ***
//       ****  ****
//       **********

let n = 5;
let pattern = "";
let k = 0;

for (let row = 1; row <= 2 * n + 1; row += 1) {
  let value_of_k = row > n ? k-- : k++;

  for (let col = 1; col <= 2 * n; col += 1) {
    if (col <= n - value_of_k || col > n + value_of_k) pattern += "*";
    else pattern += " ";
  }

  pattern += "\n";
}
console.log(pattern);
