// 21.        *      *
//          *   *  *   *
//        *      *      *
let n = 3;
let pattern = "";
for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n * n; col++) {
    if ((row + col) % 4 == 0 || (row == 2 && col % 4 == 0)) pattern += "*";
    else pattern += " ";
  }
  pattern += "\n";
}
console.log(pattern);
