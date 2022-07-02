// *****
// *****
// *****
// *****
// *****
// *****

let square=""

for(let i=0;i<=5;i++){
  for(let j=0;j<5-i;j++){
    square+=""
  }
  for(let k=0;k<5;k++){
    square+="*"
  }
  square+="\n"
}
console.log(square)