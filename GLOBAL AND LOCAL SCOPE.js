
// this is the global scope 
// var  c=4409
let a=78349






// inside if that called  block scope.
if(true)
{let a=90
const b=80
var c=23
console.log("INNER:",a)

}

// console.log(a)..comment a nad b cause it gives error for under {}scope.
// console.log(b)

//now c will give answer 23.SO how to deal with this problem????
console.log(c)
console.log(a)
