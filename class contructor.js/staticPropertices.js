class User{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`User;${this.username}`);
        
    }
    // when a create a user there automatic be a id.
    // sometimes we did not want to give access of  that method  to all the instance being make  from this class.--so we use static.
     static createid(){
        return'123'
    }
}

const kowshik=new User("kowshik")
console.log(kowshik.createid())-- we comment it to show that teacher part . as it it is under static so it will give error.




class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}


const iphone = new teacher("ihop79@phone.com")
// iphone.logMe();
console.log(iphone.createid())--- this will give error cause static

 


 