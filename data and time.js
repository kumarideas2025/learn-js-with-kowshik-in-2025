let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toJSON)


console.log(typeof myDate) // so date is a object


// to set my own date in js
// NOTICE that: MONTH IS START AS 0 iN js
let mycreatedDate=new Date(2055,0,23)
console.log(mycreatedDate.toLocaleString())


// 5 and 3 will give me time like: 5:03 am
let mycreatedDate=new Date(2055,0,25,5,3)
console.log(mycreatedDate.toLocaleString())


let mycreatedDate=new Date("2023-02-14")
console.log(mycreatedDate.toLocaleString())

//  for creating pull/ voting  in js 
let myTimestamp=Date.now()
console.log(myTimestamp) // this will give millie second values from 1977


// from date we can make out time in mille second
console.log(mycreatedDate.getTime()) 



// convert to second
console.log(Math.floor(Date.now()/1000))


let newDate =new Date()
console.log(newDate)
console.log(newDate.getMonth()) // in output we got 9 cause month count at 0.
console.log(newDate.getDay())



// console.log(`the date is ${newDate.getDate()} and month is ${newDate.getMonth()}`)




// we can assign multiple object in a date

// When you use 'default', you are telling the JavaScript engine:
// "Don't worry about specifying a language code 
// (like 'en-US', 'bn-BD', or 'de-DE'). Instead, please use the system's default locale."
newDate.toLocaleString('default',{
    weekday:"long",
 })