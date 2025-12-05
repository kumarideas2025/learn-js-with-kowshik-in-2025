// forof loop in array

 
// use forof keyword to find the syntax


const arr=[1,2,3 ,4,5]
for (const num of arr){
console.log(num);
}


const greetings="hello word"
for (const i of greetings) {
    console.log(`Each char is ${i}`);
    
}

//map---give order  is inOrder and in output we find Unique values
// The Map object: This is a built-in data structure that stores 
// key-value pairs, similar to a dictionary or hash map in other languages.
const map =new Map()
map.set('BAn','UK','NZ')
map.set('BAn','Utt','NZtt')
map.set('Rot','UKtt','NZ')
map.set('BAyn','UK','No')
console.log(map);// if any value is already in the mapping didnot consider it again



//forof loop in MAp
for (const [element,value] of map) {// array destructure [key,value]
    console.log(element, ':-',value);
    
}

//can we add for of in he object
// const MYobject={
//     'GAme1':'NFS',
//     'Game2':'gg'
// }
// for (const [element,value] of  MYobject) {
//     console.log(element, ':-',value);
    
//} -----------MYobject is not iterable---will find this