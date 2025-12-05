//object can be two format ---Singleton and object literals





//---------------------object literals------------

//Question: take a symbol and add it into object key ..then print it
 const MySym=Symbol("KEy1")


const JsUser = {
   name: "Kowshik",
 // keys:Values....behind the secne the keys perofrm like a stirng so.."name":"Kowshik"
  "full name":"KOWshik Sarker",
  age:18,
  //FOR USE AS SYMBOL
  [MySym]:"kowshik454",
  location: "jaipur",
  email: "kowshik8454@gamil.com",
  isLoggedIN: false,
  lastLOgindays: ["MOnday", "Saturday", "sunday"],
};
console.log(JsUser)


console.log(JsUser.email)
console.log(JsUser["email"])
// we cannot access full name  with the help of only  (.full name) ...so

console.log(JsUser["full name"])

 console.log(typeof [MySym])


// with the use of freez we can set it as default on=bject value. so changes did not show
JsUser.email="koshk_kUmar"
// Object.freeze(JsUser)
JsUser.email="koshk_696969669_kUmar"
console.log(JsUser.email)






//---------object to function-----------------


//for use this first we unfreez the freez part (put into comment)
JsUser.greeting=function(){
  console.log("hello Kowshik!!!!! Have a nice day")
}
console.log(JsUser.greeting())
//this will not execute function only referencing function.
console.log(JsUser.greeting)



JsUser.greetingTWO=function(){
  // we use this to know how many properties in the object
  console.log(`hello js user ,${this.name}`)
}
console.log(JsUser.greetingTWO())
















//----------singleton--constractor will make it. Object.create

// const X={}-------this is a non_singleton object

const X=new Object()
X.id="345KOwshik"
X.name="kowshik"
X.isLoggedIN=false
console.log(X)


const  USer={
  email:"KOwshik016@gamil.com",
  fullName:{
    userFullName:{
      firstname:"kOWshik",
      lastNAme:"Sarker"
    }
  }
}

console.log(USer.fullName)
console.log(USer.fullName.userFullName)

//if there is full name is not exists. then we use ?. we will learn it in API
// console.log(USer.fullName?.userFullName)



//----object merge---

const obj1={1:"KOwwshik" , 2:"Sarker"}
const obj2={3:"Virat" , 4:"Smith"}

// 3 ways to merge

const obj3={obj1 , obj2}
 console.log(obj3)

// {}---target and obj1&obj2 is source.Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)


const obj7={...obj1 , ...obj2}
 console.log(obj7)



 //WHEN VALUE FROM DATABASE
 const Users=[
  {
    id:2334,
    name:"siam"
  },
    {
    id:239934,
    name:"sijjjam"
  },
    {
    id:56652334,
    name:"siamoo"
  }
 ]
 Users[1].id
 console.log( Users[1].id)


 // from X user...notice that output gives which kind of data
console.log(Object.keys(X))  
console.log(Object.values(X))
console.log(Object.entries(X))//give keys and values both

console.log(X.hasOwnProperty('isLoggedIN'))