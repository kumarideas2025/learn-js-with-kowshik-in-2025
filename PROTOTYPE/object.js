function multipleBY5(num){
    return num*5
}

//multipleBY5.power = 2 adds a new property to the function object
multipleBY5.power=2 // function is also a oject...so we can add property to them.

console.log(multipleBY5(5));
console.log(multipleBY5.power);
console.log(multipleBY5.prototype);

//prototype will find solution for that function until it find null










function createUser(username,score){
     this.username=username
     this.score=score
}
createUser.prototype.increment=function(){ // here increment is  a prototype.
        console.log(this.score++);
 }

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
    
}
 const coffee= new createUser("coffee",45)
  const chai=new createUser("chai",245)
 

  chai.printMe()
  coffee.increment()















// ┌─────────────────────────────────────────────────────────────────────┐
// │         How `new createUser()` Works (All Steps in One Frame)       │
// ├─────────────────────────────────────────────────────────────────────┤

// 1️⃣ Step 1: Create an empty object
//         chai = { }

// 2️⃣ Step 2: Link object to prototype
//         chai.__proto__  ─────────────→  createUser.prototype

// 3️⃣ Step 3: Run constructor function
//         createUser.call(chai, username, score)
//         → chai.username = "Kowshik"
//         → chai.score = 10

// 4️⃣ Step 4: Return the object
//         return chai

// ───────────────────────────────────────────────────────────────────────

// Final Prototype Chain:
//         chai
//           │
//           ├─ username: "Kowshik"
//           ├─ score: 10
//           │
//           └── __proto__ ────────────→ createUser.prototype
//                                          └─ increment()

// └─────────────────────────────────────────────────────────────────────┘






//   ┌──────────────────────────────────────────────────────────────────────────┐
// │                   How chai.printMe() Is Resolved (Prototype Lookup)       │
// ├──────────────────────────────────────────────────────────────────────────┤

// Step 1:
// chai.printMe()
//       ↓
// Step 2:
// Does chai have printMe?      ❌ No        ← (HERE)
//       ↓
// Step 3:
// Look inside chai.__proto__
//       ↓
// Step 4:
// Found printMe in createUser.prototype   ✔
//       ↓
// Step 5:
// Call printMe() with:
//       this = chai

// ───────────────────────────────────────────────────────────────────────────

// Lookup Chain Summary:
// chai.printMe → not found in chai → go to chai.__proto__ → found → call it

// └──────────────────────────────────────────────────────────────────────────┘







/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/