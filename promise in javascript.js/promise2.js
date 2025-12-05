 
const promiseTWO=new Promise(function(resolve , reject)
            {
            setTimeout(function(){
                        resolve({username:"chai",email:"kowshik016@gmail.com"})
            },1000)
}
)

promiseTWO.then(function(user){
    // we pass in there but question is how we pass data there?
        console.log(user);
        
})