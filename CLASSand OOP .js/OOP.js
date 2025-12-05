// object litlerl
const user={
        username:"kOwshik",
         LoginCount:8,
        SignedId:true,

        getUserDetails:function(){
        // console.log("got user details from db");


        // this key word gives current context .
        // when we tall told function to get some data outside of function we use this keyword.
        console.log(`username:${this.username}`);
        

        // this will give current context
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());

// console.log(this); // this give empty string()

// Where?	                         What is this?
// Inside  object method	         The object itself
// Node.js top-level	             {} (module.exports)
// Browser top-level	                window
// Inside function (non–strict mode)	 window
// Inside function (strict mode)	       undefine










//--------------------constructor--------------------

// new ---key word is the constructor function.
//from one object multiple litreles .

// const promiseONe=new Promise()
// const date =new date()





function User(username,LoginCount,Is_loggedIn){

    // left side is variable and right side is our passing value
    this.username=username
    this.Is_loggedIn=Is_loggedIn
    this.LoginCount=LoginCount
    this.greeting=(message)=>{
        console.log(`welcome ${message}, ${this.username}`);
        
    }
    return this // for pass on object . this will not effect the value(if we give it or nor give it)
}


//  const UserOne=User("KOwshik",true,894)
//  const UserTwo=User("Kumar",false,7890) // this will override value of userone.(if we not use userTwo)
//  console.log(UserOne);


//constructor function multile instance of class.
// new create  newly object .k
const UserOne= new User("Kowshik",true,894)
const UserTwo= new User("Kumar",false,7890)  

UserOne.greeting("HI mfc")
UserTwo.greeting("fuck you")

//console.log(UserOne.constructor);-- this is reference of it's own

console.log(UserOne);
console.log(UserTwo);





//-------without new----data passes-------------------------

// User("Kowshik") 
//       ↓
// this = Global Object
//       ↓
// sets global.username = "Kowshik"
//       ↓
// return global
//       ↓
// UserOne = global







// -----------------------with new------------------------------
// new User("Kowshik", true, 894)
//         ↓
// 1. Create {} 
//         ↓
// 2. this = {} (this point to that empty object)
//         ↓
// 3. this.username = "Kowshik"
//    this.Is_loggedIn = true
//    this.LoginCount = 894
//         ↓
// 4. return this  (automatic)
//         ↓
// UserOne = {
//   username: "Kowshik",
//   Is_loggedIn: true,
//   LoginCount: 894
// }
