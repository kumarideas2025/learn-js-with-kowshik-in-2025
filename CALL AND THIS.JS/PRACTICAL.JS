function SetUsername(Username){
    // complex Db calls
    this.Username=Username
    console.log("called");
    
}


function createUaser(username,email,password){

    // here only gives reference but not  the call.
        // SetUsername(username)--- as a result we dii not find any username information in the output.


        // so we use---{to hold reference }
        SetUsername.call(this,username)


        this.email=email
        this.password=password
}

const coffee= new createUaser("coffee", "kowshk909@ff.com", "123")
console.log(coffee);
