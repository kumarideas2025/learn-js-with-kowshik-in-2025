// STACK(PRIMITIVE) ,HEAP(NON-PRIMITIVE)
// FROM STACK WE FIND COPY OF ORIGINAL VALUES, FROM HEAP WE FIND REFENCE OF ORIGINAL VALUES



let myCourse="js learn"
// as we call from another_name we find a copy of js learn
let another_name= myCourse
// so as we cahnge: myCourse value will same but thecopy value is change to animattion kiddo
another_name="animation kiddo"
console.log(myCourse);console.log(another_name)


// cause in heap we find a reference of original data, so if changed the data both will change
// think like we put emial and id in a container with original value
// then we make a call with user t give yhe original vlaue. as we called it with user2 will give the same value.
// then we change the value in user2 will effect original causee it referencing so user call also give the changing value.


let User={
    email:"kowshik016@gmail.com",
    id:242-16-076
}

let user2=User

user2.email="hhk@gmail.com"
console.log(user2.email)
console.log(user2.email)
