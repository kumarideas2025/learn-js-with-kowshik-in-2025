// OBJECT BASE

const user={
    _email:'kowshik@2322.com',
    _password:"afsfs",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
this._email=value
    }
}

// here we use factory function.
const tea=Object.create(user) // create an object on the base of object.
console.log(tea.email)

//_ give private properties not for outer. but after 2022 there id a proposal of #.