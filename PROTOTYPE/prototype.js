
//---------------------------------------------------------------------------

let myHeros=["thor","loki"]//---array ---conbert to object

let heroPower={ //---function--. convert to object
    thor:"hammer",
    loki:"magic",

    getMAgiPower:function(){
        console.log(`loki power is${this.loki}`);
        
    }
}

 




//can we added a object by ourself as it is not in the prototype?

Object.prototype.kowshik=function(){
    console.log(`Kowshik is present as an object and we could use in from a prototype`);
    
}
heroPower.kowshik()
myHeros.kowshik()






//------ if we inject to array does it have same power in object?-----
Array.prototype.HeyKOwshik=function(){
    console.log(`it is new day`);
    
}
myHeros.HeyKOwshik()
// heroPower.HeyKOwshik()--that will not access able
// so  WE CAN CALLED WE GIVE POWER ONLY ARRAY IT IS NOT PASSING TO OBJECT













//-------------------------------------INHERITANCE-----------------------------

//JS inheritance is prototype-based, not class-based.
const uaser={
    name : "coffee",
    email:" codean-dKOwshik%^%"
}
const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable: false
}

const Tasuport={
    makeAssignmwent :'js',
    fuuTime:false
    // __proto__:teachingSupport
}

// Teacher.__proto__=user // teacher can access user all propertices
//__proto__: is linked between 




//-morden syntax---->>>(to add teacher feature in teacherSupporter)

// We use objects because prototype inheritance only works with objects.
//Object.setPrototypeOf(obj, prototypeObj)

Object.setPrototypeOf(teachingSupport,teacher)
console.log(teachingSupport.makeVideo) //makevideo we found from teacher that inherite from .
console.log(teachingSupport.isAvailable)  











//--- normally---------
// let Myname="kowshik     "
// let github="kumar    "

// console.log(Myname.trim().length);





//-------by making  string that prototype object------
let Myname="kowshik     "
 String.prototype.truelength=function(){
    console.log(`${this}`);
     console.log(`true length  is ${this.trim().length}`);
}

Myname.truelength()//---here we call Myname(is a value of kowshik) so we find kowshik as this call

"kumar".truelength()//---here directly called kumar so we find kumar as this call 