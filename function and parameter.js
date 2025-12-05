function MYCode() {
  console.log("H");
  console.log("I");
  console.log("M");
  console.log("H");
  console.log("K");
}
//function reference----MYCode.
// MYCode()---this will executed function by calling

MYCode();






function ADDTwoNUmber(number1, number2) {
  // parameter
  console.log(number1 + number2);
}
ADDTwoNUmber(5, 7); // give a argument otherwise it will give a NAN .
ADDTwoNUmber(5, "7"); // will convert both into string .

//can declared with const. but is there any changes?
const result = ADDTwoNUmber(1, 9); //this will give 10.

// will give Ndefined value cause there will no value in result when printing
console.log("Final_Result:", result);







// if we return something  we can store it in variable.
//more UNDERSTANDABLE EXPLAIN???
function ADDTwoNUmber(number1, number2) {
  // parameter
  let result = number1 + number2;
  return result; // 2.will find the return result with some value

  //this will not executed cause(FUNCTION RULE: BY_DEFAULT after return no code will execute)
  console.log(" Kowshik");
}

const Result = ADDTwoNUmber(1, 9); //1. after exectution return the value
console.log("Final_Result:", Result); //3.so now this result have some value. will print it by show it.






//more Way to write COde
function ADDTwoNUmber(number1, number2) {
    return number1 + number2
}
const Result = ADDTwoNUmber(7, 8); 
console.log("Final_Result:", Result); 




//more trices
function LOginUSERMessage(USertNAme){
    return `${USertNAme} just logged_in`
}

console.log(LOginUSERMessage("KOWsHIK"))





// what if i did not pass a value?
function LOginUSERMessage(USertNAme){

    //  if(!USertNAme)--can use this also.
    if(USertNAme===undefined){
        console.log("PLease enter a Username")
        return
    }
    return `${USertNAme} just logged_in`
}

console.log(LOginUSERMessage( ))// output will give undefined






//can set a default value in it. so it show through we left empty our argument.
// thuis callled value override
function LOginUSERMessage(USertNAme="KUMAR"){

     if(!USertNAme ){
        console.log("PLease enter a Username")
        return
    }
    return `${USertNAme} just logged_in`
}

console.log(LOginUSERMessage( )) 



