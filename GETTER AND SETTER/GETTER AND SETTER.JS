// if we call password from setter and construction both we find that:Maximum call stack size exceeded

//so,
class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email=value
    }


    get password(){
        return `${this._password.toUpperCase()}kowshikgg`// use the user get it in upper case but it does changes the actual  structure of it. and by giving kowshik to this we saw that upper case+kowshik give[so no one can understand what is the  password]
    }
    


    set password(value){
            this._password=value // we set passwprd to noraml lower csee 
    }

}


const kumar=new user("kowshik@88gamil.com","hgytu464646")
console.log(kumar.password);
console.log(kumar.email);



// when we fix this.password to this._password we saw that our set password issue is gone. 
// but at this time we did  not fix this.password so we fill find get problem. 
