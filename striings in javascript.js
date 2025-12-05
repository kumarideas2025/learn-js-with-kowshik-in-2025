const name="kowshik"
const repoCount=13

// console.log(name+repoCount+"value");--old syntax
// for find (`) beside 1
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// declartion of a  string
const gameNmae=new String('kowshik-kks')


console.log(gameNmae[0])
console.log(gameNmae.__proto__);// out show {} but it is not empty. we find it from inspaction console log

console.log(gameNmae.length)
//  for more discover proto of inspaction console

console.log(gameNmae.toUpperCase())
console.log(gameNmae.charAt(3))

 console.log(gameNmae.indexOf('t'))


const newString=gameNmae.substring(0,4)
console.log(newString)

// use negative for reverse value
const anotherString=gameNmae.slice(-3,1)
console.log(anotherString)


// trim: will remove spaces 
const newString1="  kumar  "
console.log(newString1)
console.log(newString1.trim())


//replace
const url="https://kowshik.com/kowshik%20kumar"
console.log(url.replace('%20' ,'-'))

// includes
console.log(url.includes("sarker"))


// will give outputin arrays
console.log(gameNmae.split('-'))




// in console:

// "hello"+"kowshk"
// 'hellokowshk'
// console.log("kowshik")
// VM443:1 kowshik
// undefined

// const gameNmae=new String('kowshik')
// undefined
// gameNmae
// String {'kowshik'}0:
//  "k"1: "o"2: "w"3: "s"4: "h"5: "i"6: "k"
//  length: 7
//  [[Prototype]]: 
//  Stringanchor: ƒ anchor()at: ƒ at()big: ƒ big()blink: ƒ blink()bold: ƒ bold()charAt: ƒ charAt()charCodeAt: ƒ charCodeAt()codePointAt: ƒ codePointAt()concat: ƒ concat()constructor: ƒ String()endsWith: ƒ endsWith()fixed: ƒ fixed()fontcolor: ƒ fontcolor()fontsize: ƒ fontsize()includes: ƒ includes()indexOf: ƒ indexOf()isWellFormed: ƒ isWellFormed()italics: ƒ italics()lastIndexOf: ƒ lastIndexOf()length: 0link: ƒ link()localeCompare: ƒ localeCompare()match: ƒ match()matchAll: ƒ matchAll()normalize: ƒ normalize()padEnd: ƒ padEnd()padStart: ƒ padStart()repeat: ƒ repeat()replace: ƒ replace()replaceAll: ƒ replaceAll()search: ƒ search()slice: ƒ slice()small: ƒ small()split: ƒ split()startsWith: ƒ startsWith()strike: ƒ strike()sub: ƒ sub()substr: ƒ substr()substring: ƒ substring()sup: ƒ sup()toLocaleLowerCase: ƒ toLocaleLowerCase()toLocaleUpperCase: ƒ toLocaleUpperCase()toLowerCase: ƒ toLowerCase()toString: ƒ toString()toUpperCase: ƒ toUpperCase()toWellFormed: ƒ toWellFormed()trim: ƒ trim()trimEnd: ƒ trimEnd()trimLeft: ƒ trimStart()trimRight: ƒ trimEnd()trimStart: ƒ trimStart()valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "kowshik"
