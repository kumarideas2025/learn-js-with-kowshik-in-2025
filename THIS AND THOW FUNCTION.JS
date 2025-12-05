//we are using in the object.

const user = {
  username: "KOWSHUIK",
  price: 890,
  // use this for current context inside it.
  WELcomMEssage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this); // will give all the value in a scope of that current context.
  },
};

user.WELcomMEssage();

// here the current context is changed .so name will change
user.username = "kymar";
user.WELcomMEssage();

console.log(this); //will give {}..node(engine). cause here global object is empty
// in console that gives window object .(in browser most you found that window object)











//               ---------------ARROW FUNCTiON-----------------



//normal function
function one() {
  let username = "kokk";
  console.log(this.username); // this will give undefined cause in function we can not use this like this
}
one();


// another way
const chai = function one() {
  let username = "kokk";
  console.log(this.username);
};
chai();




//ARROW FUNCTION
const chai = () => {
  let username = "kokk";
  console.log(this.username);
  console.log(this);
};
chai();












//                      --------pure arrow function---------------------


// basic SYNTAX:
// ()=>{}
// can hold in a variable with para_meter. 



//explicit return
const addTWO=(num1,num2)=>{
    return num1 + num2
}
 console.log(addTWO(2,7))



 // another way like IMPLICIT  return(like ternary code in one line)
 // important for learing react
 const addTWO=(num1,num2)=> num1 + num2
 console.log(addTWO(473,-89))


 // object retrun using implicit ...HERE WE HAVE TO USE ()
const addTWO=(num1,num2)=> ({username:"KOIWSHIK"})
 console.log(addTWO())




