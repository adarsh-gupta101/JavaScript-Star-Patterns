     
//     *
//    **
//   ***
//  ****
// *****


let pattern=""

for(let i=0;i<=5;i++){
  for(let j=0;j<5-i;j++){
    pattern+=" "
  }
  for(let k=0;k<i;k++){
    pattern+="*"
  }
  pattern+="\n"
}
console.log(pattern)