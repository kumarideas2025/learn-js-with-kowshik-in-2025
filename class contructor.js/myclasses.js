// all we user js after ES6


class User1{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptPassword(){
                return `$${this.password} kks`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
        // console.log(coffee.changeUsername());----JavaScript never runs any code after return

    }
}

const coffee=new User1("coffee","kowsh877@emali","99h")
console.log(coffee.changeUsername());





//------------------- behind the scene--------------

     function User(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
User.prototype.encryptPassword=function(){  
        return `${this.password}abnn`

}

User.prototype.changeUsername=function(){//with this we make  changeusername as a  of prototype() of object
    return `${this.username.toUpperCase()}abnn`
}


const tea=new User("code","lkjoksodksh877@emali","000009h")
console.log(tea.changeUsername());

