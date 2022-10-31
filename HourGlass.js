let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 2; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);