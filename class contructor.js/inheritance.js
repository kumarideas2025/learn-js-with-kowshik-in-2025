class User {
  constructor(Username) {
    this.Username = Username;
  }

 // this logMe gives value of our username set value directly
logMe()  {
 console.log(`USERNAME IS ${this.Username}`);
 }
}


class teacher extends User{
    // override constructor
    constructor(Username,email,password){
        super(Username) // automatic refer which class refer[here, User class is referred] and  take from here set username value and directly  access .
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New Course was added by ${this.Username}`);
        
    }
}

// new creates a new object and connects it to the constructor function or class.
const ghuma=new teacher("Kowshik SIR","jksfjsf@gamil.com","89898")
ghuma.addCourse()
ghuma.logMe()// ghuma aslo have the access of logme cause we access through inheritance .

const Tea=new User("RIM")
// tea.addCourse()-- so it has no access of addCourses
Tea.logMe()


console.log(ghuma=== Tea);
console.log(ghuma=== teacher);
console.log(ghuma instanceof teacher);
console.log(ghuma instanceof User);

