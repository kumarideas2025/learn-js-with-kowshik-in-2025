const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)


console.log(balance.toString().length)


//mostly used--- will give 100.00 types of values
console.log(balance.toFixed(2))


const otherNUmber=234.6646
// toprecision will give a round_off value : 234.6
console.log(otherNUmber.toPrecision(3))


// it will give comma  separate values
const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN'))


// ----------------------------maths---------------------
console.log(Math) // if we run we could see it is an object with many more properties
console.log(Math.abs(-4)); //will give positive values
// will give full number
console.log(Math.round(4.8))
console.log(Math.ceil(4.8))
console.log(Math.floor(4.8))
console.log(Math.min(3,6,4,7,9))
console.log(Math.max(3,6,4,7,9))

// more use able
console.log(Math.random())

//set range
console.log(Math.random()*10)

// sometime random can give 0 values.so to avoid that i can use
// and this will give result until 10
// if we did not give + 1 . sometimes it can gave 0 value.
console.log(Math.floor(Math.random()*10)+1)





// sometime we have to define min and max so use this formula can give that
// this formula can give a number between 20 to 10
const min=10
const max=20

console.log(Math.floor(Math.random() *(max-min+1))+min)




// inspection part---
// const score=400
// undefined
// score
// 400
// console.log(score)
// VM315:1 400
// undefined
// const balance=new Number(100)
// console.log(balance)
// VM319:2 Number {100}[[Prototype]]: Numberconstructor: ƒ Number()EPSILON: 2.220446049250313e-16MAX_SAFE_INTEGER: 9007199254740991MAX_VALUE: 1.7976931348623157e+308MIN_SAFE_INTEGER: -9007199254740991MIN_VALUE: 5e-324NEGATIVE_INFINITY: -InfinityNaN: NaNPOSITIVE_INFINITY: InfinityisFinite: ƒ isFinite()isInteger: ƒ isInteger()isNaN: ƒ isNaN()isSafeInteger: ƒ isSafeInteger()length: 1name: "Number"parseFloat: ƒ parseFloat()parseInt: ƒ parseInt()prototype: Number {0, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, toString: ƒ, …}arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]toExponential: ƒ toExponential()toFixed: ƒ toFixed()toLocaleString: ƒ toLocaleString()toPrecision: ƒ toPrecision()toString: ƒ toString()valueOf: ƒ valueOf()[[Prototype]]: Object[[PrimitiveValue]]: 0[[PrimitiveValue]]: 100
// undefined
// number
// VM432:1 Uncaught ReferenceError: number is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM432:1
// Number
// ƒ Number() { [native code] }
// Number.
//     console.log(Math)
// VM612:2 Uncaught TypeError: Cannot read properties of undefined (reading 'log')
//     at <anonymous>:2:13
// (anonymous) @ VM612:2
// console.log(Math)
// VM616:1 Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}E: 2.718281828459045LN2: 0.6931471805599453LN10: 2.302585092994046LOG2E: 1.4426950408889634LOG10E: 0.4342944819032518PI: 3.141592653589793SQRT1_2: 0.7071067811865476SQRT2: 1.4142135623730951abs: ƒ abs()acos: ƒ acos()acosh: ƒ acosh()asin: ƒ asin()length: 1name: "asin"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]asinh: ƒ asinh()atan: ƒ atan()atan2: ƒ atan2()atanh: ƒ atanh()cbrt: ƒ cbrt()ceil: ƒ ceil()clz32: ƒ clz32()cos: ƒ cos()cosh: ƒ cosh()exp: ƒ exp()expm1: ƒ expm1()f16round: ƒ f16round()floor: ƒ floor()fround: ƒ fround()hypot: ƒ hypot()imul: ƒ imul()log: ƒ log()log1p: ƒ log1p()log2: ƒ log2()log10: ƒ log10()max: ƒ max()min: ƒ min()pow: ƒ pow()random: ƒ random()round: ƒ round()sign: ƒ sign()sin: ƒ sin()sinh: ƒ sinh()length: 1name: "sinh"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]sqrt: ƒ sqrt()tan: ƒ tan()tanh: ƒ tanh()length: 1name: "tanh"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]trunc: ƒ trunc()Symbol(Symbol.toStringTag): "Math"[[Prototype]]: Object
// undefined
