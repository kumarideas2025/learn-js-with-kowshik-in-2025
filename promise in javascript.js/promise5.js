fetch('https://randomuser.me/api/')

.then((response)=>{  // get that response from server
    return response.json()
})
.then((data)=>{ // now i can use that raw data.
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("okh this is working");
    
})


// Imagine you order food at a restaurant:-------

// 1st .then() = The waiter brings your food
// But the food is still inside the package (this is like response — raw data).

//  response.json() = Opening the package
// Now you take the food out of the package and
//  make it ready to eat (convert raw response → JSON).

//  2nd .then() = You can now eat the food
// This is where you actually use the real data (JSON data).