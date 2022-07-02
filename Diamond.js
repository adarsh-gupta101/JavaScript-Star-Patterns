
let n = 5;
let pattern = "";

for (let i = 0; i <= n; i++) {
  for (let j = n; j >i; j--) {

    pattern += " ";
  }

  for(let k=0; k<2*i-1; k++){
    pattern += "*";
  }
  pattern += "\n";
}

for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      pattern += "*";
    }
    pattern += "\n";
  }
console.log(pattern);