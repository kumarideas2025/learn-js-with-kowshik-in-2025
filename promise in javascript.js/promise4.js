const promise_four=new Promise (function(resolve, reject ){
    setTimeout(function(){
        // let  error= false-----check with this this will give that if part
        let  error= true
        if(!error){
                    resolve({username:"KOwshik and js", password:"_Tdgytad$"})
        }
        reject('ERROR:jS went wrong')
    },1000)
})


//  async this wait some time to do that work (if there find any error it will giv e that instandly)
async function consumePromiseFour()
    {
        try {
             const response =await promise_four
       console.log(response);
       
        } catch (error) {
            console.log(error);
            
        }
    }
    consumePromiseFour()
// async can not handle error  but it can give the instruction to resolve it---
//This error originated either by throwing inside of an async function without a catch block, 
// or by rejecting a promise which was not handled with .catch().









//--- this is for next part---
async function  getAllUsers() {
        try {
            const response= await fetch('https://randomuser.me/api/')
  // console.log(response);--to check that response is giving values.
  
       const data= await  response.json()
       console.log(data);
    
        } catch (error) {
            console.log("E:",error);
            
        }
}
    getAllUsers()   
    