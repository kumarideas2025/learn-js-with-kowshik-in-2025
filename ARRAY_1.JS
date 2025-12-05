const myArr=[0,1,2,34,5]
// js array are resize_able

console.log(myArr[3])
// copy operation create a shallow  copy : it is copy that share the same referrrence property

// deep opy are the opposite of it.

// 1st way
const myHeros=["kowshik", "kumar"]

//2nd way
const myArr2=new Array(1,2,3,4)
console.log(myArr[2])


// array method

myArr.push(98)
myArr.push(8)
myArr.pop()
console.log(myArr)


//it will give value as a first position in array.
myArr.unshift(9)
console.log(myArr)

// shift will remove that vAlue
myArr.shift()
console.log(myArr)


console.log(myArr.includes(9))
console.log(myArr.indexOf(19))



console.log(myArr)
// this join will convert our array to string 
const newArr=myArr.join()

 console.log(newArr)
console.log( typeof newArr)



// slice AND splice

//-----so  with A we can define a name"A" in front of array
console.log("A" , myArr)
const myn1= myArr.slice(1,3) //-(start index , end index)
console.log(myn1)

//our original array
console.log("B",myArr)



 const myn2= myArr.splice(1,3)  
 console.log("c",myArr) // this will take way that slice array and give that rest original array
console.log(myn2)//



// this will take that push array as a one element and add as element in the array list
const marvel_heros=["iron_man","thor","hulk"]
const dc_heros=["super_man","batman","flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

so if we access that element from push values
console.log(marvel_heros[3][2])


const marvel_heros=["iron_man","thor","hulk"]
const dc_heros=["super_man","batman","flash"]

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)



// multidimentional array to one-dimentional array
const another_array=[1,2,3,4,[8,6,9],7,[44,55,[9,70]]]
//using flat will make it one-dimentional. ()..can give instruction of how many array we waant to make flat
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("kowshik"))

//convert to array
console.log(Array.from("kowshik"))

//convert to Array-- in output wi;; give empty cause it did not understood which array it should from . there is keys as well as values
console.log(Array.from({name:"kowshik"}))//interseting case for interview


//make it in a list of array
let sore1=100
let sore2=200
let sore3=300

console.log(Array.of(sore1,sore2,sore3))