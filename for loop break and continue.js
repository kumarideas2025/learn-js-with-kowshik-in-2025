// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if ( element==5) {
        console.log("5 is the_number");
        
    }
    console.log(element);
    
}


for (let index = 0; index <= 10; index++) {
    console.log(`Outer loop Value:${index}`);
    
 for (let i = 0; i < 10; i++) {
//  console.log(`OUTER loop value ${index} and inner loop ${i}`);
     
 console.log(index+'*'+i+'='+ index*i)
 }    
}



let array=["superman","batAMn","wonderWOMan"]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}


// BREAK

for (let index = 0; index < 10; index++) {
    if(index==5)
{ console.log('detected 5');
    break
}  
console.log(`Value of index is ${(index)}`);
   
}



//CONTINUE

for (let index = 0; index < 10; index++) {
    if(index==5)
{ console.log('detected 5');
     continue
}  
console.log(`Value of index is ${(index)}`);
   
}
