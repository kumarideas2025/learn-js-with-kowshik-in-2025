
// creating of promises
// promise takes call backs and reduce
const new_promise=new Promise(function(resolve,reject){
        //do an async task
        // DB calls,cryptography ,network
        setTimeout(function(){
            console.log('Async task is  complete ')

            // to connect resolve and .then()
            resolve()
         },1000)
})

// resolve connection is with .then()
new_promise.then( function(){
    console.log("promise consumed");
    
})





// now here we do this in one part.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("here we do this in single steps");
        resolve()
            },1000)
}).then(function(){
    console.log("Async to resolve 2")
})