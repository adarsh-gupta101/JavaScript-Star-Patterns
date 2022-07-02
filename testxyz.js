// let n = 5;
// let pattern = "";

// for (let i = 0; i <=n; i++) {
//   // external
//   for (let j = 0; j < n; j++) {
//     // internal
//     pattern += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     // internal
//     pattern += "*";
//   }
//   // newline after each row
//   pattern += "\n";
// }
// console.log(pattern);


// let n = 5;
// let pattern = "";

// for (let i = 0; i <= n; i++) {
//   // external
//   for (let j = 0; j < i; j++) {
//     // internal

//     pattern += "*";
//   }

//   // newline after each row
//   pattern += "\n";
// }
// console.log(pattern);




// let n = 5;
// let pattern = "";

// for (let i = 0; i <= n; i++) {
//   // external
//   for (let j = 0; j < n-i; j++) {
//     // internal

//     pattern += "*";
//   }

//   // newline after each row
//   pattern += "\n";
// }
// console.log(pattern);



// let n = 5;
// let pattern = "";

// for (let i = 0; i <= n; i++) {
//   // external
//   for (let j = 0; j <i; j++) {
//     // internal

//     pattern += " ";
//   }

//   for(let k=0; k<2*(n-i)-1; k++){
//     pattern += "*";
//   }
//   // newline after each row
//   pattern += "\n";
// }
// console.log(pattern);


// let n = 5;
// let pattern = "";

// for (let i = 0; i <= n; i++) {
//   // external
//   for (let j = 0; j <n- i; j++) {
//     // internal

//     pattern += " ";
//   }

//   for(let k=0; k<2*i-1; k++){
//     pattern += "*";
//   }
//   // newline after each row
//   pattern += "\n";
// }
// console.log(pattern);


// let n = 5;
// let pattern = "";

// for (let i = 0; i <= n; i++) {
//   // external
//   for (let j = 0; j < i; j++) {
//     // internal

//     pattern += "*";
//   }

//   // newline after each row
//   pattern += "\n";
// }
// console.log(pattern);

//10. Diamond pattern in javascript

let n = 5;
let pattern = "";

for (let i = 0; i <= n; i++) {
  // external
  for (let j = 0; j <n- i; j++) {
    // internal

    pattern += " ";
  }

  for(let k=0; k<2*i-1; k++){
    pattern += "*";
  }
  // newline after each row
  pattern += "\n";
}
console.log(pattern);