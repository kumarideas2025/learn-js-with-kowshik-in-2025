//IN SHOPPING CART ADDING SYSTEM(DID NOT KNOW HOW MANY ARGUMENT AE COMING IN? )
// here we called (... as rest . somewhere we called it spread operator)



//NORMAL-- only print the first value
function calculateCArtPrice1(num1){
 return num1
}
console.log(calculateCArtPrice1(400,800,1200))



// using rest operator ..will give me a array format to store the values 
function calculateCArtPrice2(...num2){
 return num2
}
console.log(calculateCArtPrice2(400,800,1200))



//another case
function calculateCArtPrice2(val1,val2,...num2){

    //question is what is value is go to the num1??????
 return num2
}
console.log(calculateCArtPrice2(400,800,1200))
// ANSWER: IS IT WILL GIVE 1200 CAUSE 400 AND 800 IS TOOK BY VAL1 & VAL2.








// FUNCTION WITH OBJECT
const USe={
    USerNAME:"KUMAR",
    Price:33
}
function HAndle_Object(anyObject){
    console.log(`Use is${anyObject.USerNAME} and price is ${anyObject.Price}`)
}
HAndle_Object(USe)

// or we can pass like this.
HAndle_Object({
    USe:"KKOWASHIK",
    Price:9990
})






//passing array in function.
const MYNEWarray=[300,400,500,700]
function ReturSEcondVAlue(getArray){
    return getArray[2]
}
console.log(ReturSEcondVAlue(MYNEWarray))

//another way
console.log(ReturSEcondVAlue([300,400,500,700]))
