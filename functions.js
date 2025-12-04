//! normal function
function add(a,b)
{
  return a+b
}
console.log(add(10,20))  //30

//! Arrow Function with explicit return
let mul=(a,b)=>{
  return a*b
}
console.log(mul(10,20))  //200

//! Arrow Function with implicit return
let div=(a,b)=>a/b
console.log(div(10,2))  //5