//! creating an array
let array=[10,20,30,40]
console.log(array) //[10,20,30,40]

//! pushing elements in an array
array.push(50,60,1) //returns new length i.e 7
console.log(array) //[10,20,30,40,50,60,1]

//! pop()- removes last element in an array and return it
array.pop() //removes and return last element i.e 1
console.log(array) //[10,20,30,40,50,60]

//! unshift()- adds elements at the begining of an array
array.unshift(1,2) //returns new length i.e 8
console.log(array) //[1,2,10,20,30,40,50,60]

//! shift()- removes first element in an array and return it
array.shift() //removes and returns first element i.e 1
console.log(array) //[2,10,20,30,40,50,60]