// properitces despriction
// console.log(Math.PI);

// math=5
// console.log(Math.PI);
// both result are same no override of values of pi


const descripter=Object.getOwnPropertyDescriptor(Math,"PI")    //this gives  hidden info for object
console.log(descripter);





// we can  define own hardcode object value that is hidden.
const cof={
    name:'gammer',
    price:344,
    isAvailable:true,


    order:function(){
        console.log("coffee no ready")
        
}
}

console.log(Object.getOwnPropertyDescriptor(cof,"name"));





//as it is my code so give me the change to access that code by myself
Object.defineProperty(cof,"name",{
    writable:false,
      enumerable: false
})





for (const  [key,value] of Object.entries(cof)) {
    if (typeof value !== 'function'){
    console.log(`${key}:${value}`);

    }
    
}// so when we do that enumrable : false   "name" info is not show in this loop.