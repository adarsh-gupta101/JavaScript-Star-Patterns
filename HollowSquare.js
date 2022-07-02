
// *****
// *   *
// *   *
// *   *
// *****

let square=""

for(let i=0;i<5;i++){
  for(let j=0;j<5;j++){
if(i==0 ||i==5-1){
    square+="*"
}  
  else if(j==0 ||j==5-1)  square+="*"
  else square+=" "
  }
  
  square+="\n"
}
console.log(square)