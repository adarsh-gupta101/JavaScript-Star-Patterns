//   *
//  ***
//  *****
// *******
n = 5;
let square = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    square += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    square += "*";
  }

  square += "\n";
}
console.log(square);
