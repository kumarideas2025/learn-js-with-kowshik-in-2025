
// SO IT IS CALLED FUNCTION  BASED SETTER AND GETTER.



function user(email,password){
    this._email=email
    this._password=password


    Object.defineProperty(this,'email',{// we say to override the value of email
                    get:function(){
                        return this._email.toUpperCase()
                    },
                    set:function(value){
                        this._email=value
                    }
    })




        Object.defineProperty(this,'password',{// we say to override the value of email
                    get:function(){
                        return this._password.toUpperCase()
                    },
                    set:function(value){
                        this._password=value
                    }
    })

}


const kumar=new user("bangalsdesh88gamil.com","hgytu4=694604646")
console.log(kumar.password);
console.log(kumar.email);