//primitive
//7 types(call by value: values in copy)-- string,number,boolean,null,undefined,symbol(for unique),bigInt


const score=100
const scoreValue=100.8
const isLOggedIn=false
const  outsideTEmp=null
let userEmail


const id=Symbol('678')
const anotherId=Symbol('678')
console.log(id===anotherId)

const bigNumber=682922467642n
console.log(bigNumber)



//reference(Non primitive):array,objects,functions
const Heros=["ironman","thor","hulk"]
let myObjects={
    name:"kowshik",
    age:22,
}

const myFUnction=function(){
    console.log("hello world");
}

console.log(typeof  bigNumber)
console.log(typeof outsideTEmp)

console.log(typeof myFUnction)// but in output we called it object function

