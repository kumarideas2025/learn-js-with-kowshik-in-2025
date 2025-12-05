function one() {
  const USerNAME = "kowshik";

  function tow() {
    const website = "youtube";
    console.log(USerNAME);
  }
  // console.log(website)---this is a insider property so will cause error and we did not execute it.
  tow();
  
  // if we comment out two then this will not executed
}

// one();

// think like a child can clam ice_cream from an elder./
// but an elder can not clam ice_cream from a child






if(true){
    const USerNAME="kumar"
    if(USerNAME === "kumar"){
        const website ="youtube"
        console.log(USerNAME+website)
    }
    //  console.log(website)
 }

// console.log(USerNAME) 









//-------interesting question or concept-------(two types of function declaration)

//if we take that addONe(8) firstly then no error
function addONe(value){
     return value+2
}

addONe(8)




// but if we AddTWo(8) firstly then comes error.cause we store value in a variable.we will read in HOSTING  CHAPTER.
const AddTWo =function(num){
    return num+2
}

AddTWo(8)








// Think of JavaScript like a house with rooms.
// Global Scope = outside all rooms → anyone can access
// Function Scope = inside a room → only people inside can access
// Block Scope = inside { } (with let/const) → even smaller room






// example:
// var a = 100;     // Global Variable

// function test(){
//     console.log(a);
// }
// test(); // 100




// Let’s break it 

// 1. var a = 100; is in Global Scope
// This means:
// The whole program knows it.
// Any function can use it.
// Any block can use it.
// Global = "available everywhere".



// 2. Function tries to access a:
// function test(){
//     console.log(a);
// }

// The function asks:
// “Do I have a variable called a inside me?”
// → No.
// So the function goes outside and looks for a.
// This is called Scope Chain.



// 3. It finds a in Global Scope → prints 100
// So:
// 100
// Why this works?
// Because:
// Functions can access outside variables (global)
// But outside cannot access inside variables



// Keyword  	Scope
// var	       Function scope
// let	       Block scope
// const	     Block scope