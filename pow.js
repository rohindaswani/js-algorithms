

function pow(x,y) {
 if (y===0) {
   return 1;
 }

 let temp = pow(x,y/2)
  if(y%2 === 0) {
   return temp * temp;
  } else {
   return x * temp * temp;
  }
}

console.log("power", pow(2,3));