const promiseThree=new Promise (function(resolve, reject ){
    setTimeout(function(){
        // let  error= true-----check with this this will give that else part
        let  error= false
        if(!error){
                    resolve({username:"KOwshik", password:"119394835_Tdgytad$"})
        }
        reject('ERROR:something went wrong')
    },1000)
})

promiseThree
.then((user)=>{
        console.log(user);
        return user.username
        
})
.then((username)=>{ // so we use channing to connecting with db
        console.log((username));
        
})
.catch(function(error){// this runs in case of error there.
    console.log(error); 
}).
finally(()=>{ // this always runs
   console.log("the promise is either resolve or reject");
    
})