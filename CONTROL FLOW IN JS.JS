//1.if

// if(condition:true){
//   then got he conditon
// }


// if(condition:fasle){
//   then got he conditon
// }

// const IsUSERloGGind=true
// if(IsUSERloGGind){

// }




// <,>,<=,>=,==(ckeck that both are equal),!+,===(also ckeck type)
if(2=="2"){
    console.log("done")
}


if(2==="2"){
    console.log("done")
}

const temp=80
if(temp<=80){
    console.log("perfect")
} 
else{
    console.log("not perfect")
}

console.log("thank you")








//----SCOPE RELATED-----

const score=9000
if(score>6700){
    const power="fart"
    console.log(`user power:${power}`)
}

    console.log(`user power:${power}`)//output :power is not defined  
    // at Object



    //BUT WHEN WE USE VAR WE WILL FIND THAT RESULT.
    // cause var make all  scope as global scope
    const score=9000
if(score>7000){
    var power="fart"
    console.log(`user power:${power}`)
}

console.log(`user power:${power}`)
// so we use let and const to avoid scope error in the global scope.



// short hand notation. but not recommanded
const balance=1000
if(balance>500) console.log("test"),console.log("test2");



//multiple values check


const balance=500

if(balance<599){
console.log("less than")
}
else if(balance>180){
    console.log("less than 2nd val")
}
else if(balance < 890){
    console.log("less than 890")
}
else{
    console.log("thank you")
}



const userLoggedIn=true
const debitCard=true
 const LogginFRomGoogle=false
const LogginFromEmail=true

if(userLoggedIn && debitCard){
    console.log("allow to buy courses")
}
console.log('FUCK YOU')

if(LogginFRomGoogle || LogginFromEmail){
    console.log("user should be logged in")
}


