// OUTPUT:
//    	 1
//      11
//     121
//    1331
//   14641

let n = 5;
let x = 1;
let pattern = "";
for (let row = 1; row <= n; row += 1) {
  for (let space = 1; space <= n - row + 1; space += 1) {
    pattern += " ";
  }

  for (let col = 1; col <= 1; col += 1) {
    if (row == 1) {
      pattern += x;
      break;
    }

    x = x * 11;
    pattern += x;
  }
  pattern += " \n ";
}
console.log(pattern);
