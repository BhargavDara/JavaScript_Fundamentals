//! for loop
let numArray=[10,12,73,34,67,42]
for(let i=0;i<numArray.length;i++)
{
  console.log(numArray[i])
}

//! while loop
var i=0
while(i<numArray.length)
{
  console.log(numArray[i++])
}

//! forEach loop
numArray.forEach((ele,ind,arr)=>{
  console.log(ele,ind,arr)
})