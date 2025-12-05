//MOSTLY USED LOOP(foreach)
const programming=["js","cpp","java","rb"]

// go to inspect and past programming to find more access



//each loop is a higher order function
//callbackfn is that??-- call back reduce that name which we use function name() cause this function works inside the array.
// also that item works as para-meter so it takes all from that array
programming.forEach(function (item){
console.log(item);
})


// we also do like this(using arrow )
programming.forEach((item)=>{
    console.log(item);
    
})



// more way
function printName(item){
    console.log(item);
    
}
programming.forEach(printName) // here we give refer of that function not executed here





// we can many more para_meter not only item 
programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})






// important for db data 
// ["","",""]
// [{},{},{}]

//------------ACCESS array object inside from an array--------
const Mycoding=
   [ {
    langNAme:'javascript',
    FIleNAme:'Js'
},
    {
    langNAme:'java',
    FIleNAme:'Java'
},
    {
    langNAme:' C++',
    FIleNAme:'cpp'
}]

Mycoding.forEach((item)=>{
    console.log(item.langNAme);
    
})








