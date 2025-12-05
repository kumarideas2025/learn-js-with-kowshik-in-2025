const UserEmail=[] // here we put {}give me taht else value but [] will give if value
if(UserEmail){
    console.log("GOT User Eamil")
}
else{
    console.log("Don't have user Eamil")
}

/*
falsy values
false ,0,-0 , BigInT 0n,"",null,undefined,nan

truthy values
 "0",'false',"",[],{},function(){}
 */

if(UserEmail.length===0){
    console.log("array is empty")
}

const emptyObj={}
// with the help of key we make the objet into array and then find the length of the array
if(Object.keys(emptyObj).length===0){
console.log("object is empty")
}

// in console--
// false==0
// true
// false==''
// true
// 0==''S
// true


//**********Nullish Coalescing Operator(??):null ,undefined

let val1;
val1=5?? 10
val2=null?? 10// so nullish operator make the safety
val3=undefined ?? 15
console.log(val3)

console.log(val1)
console.log(val2)


val4=null ?? 10??1000
console.log(val4)



//***** terniary operator

/*syntax---condotion ? true: false*/

const iceTAEprice=100
iceTAEprice >=70 ? console.log("lesss than 70") : console.log("more than 70")