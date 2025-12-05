const programming=["js","cpp","java","rb"]


const values=programming.forEach((item)=>{
    console.log(item);
    
})
console.log(values); // we find values cause of colsoe log BUT IT DID NOT RETURN Any thing...we find undefined.






//SOME TIMES WE WANT TO RETURN OR CONDITIONAL CHECK ON SPECIFIC VARIABLE LIKE: JAVA.
// so use this to return values.
const MyNum=[1,2,3,4,5,6,7,8]
const newNUms=MyNum.filter((num)=>num>4)
console.log(newNUms);



//WORKING FILTER WITH SCOPE
const MyNum=[1,2,3,4,5,6,7,8]
const newNUms=MyNum.filter((num)=>
    {
        // num>4 // will give exple_site return ..output show [].. lear oin function 
        
        // use return KEY WORD CAUSE W WORK INSIDE A SCOPE .
        return num>4
    })
console.log(newNUms);



// if we use foreach in it
const NEEWWNUM=[]
MyNum.filter((num)=>{
    if(num>4)
{    NEEWWNUM.push(num)
}}
)
console.log(NEEWWNUM);









//more practice
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);










//ANOTHER METHOD
const MyNum=[1,2,3,4,5,6,7,8]

//we have add 69 in all
const newNUm=MyNum.map((num)=>{
return num+69
})
console.log(newNUm);








// ==============CANNING METHOD---->means we can use a method in multiple times
const MyNum=[1,2,3,4,5,6,7,8]

const newNum=MyNum
                    .map((num)=>num*10)// here we find a array that multiple with 10
                    .map((num)=>num+69)// here we find +69 more with new array.
                    .filter((num)=> num>=90)
console.log(newNum);














//NEW METHOD-------REDUCE ----------------(DOC MDN)-------------

 const array = [1, 2, 3, 4];
 const initialValue = 0;
const sumWithInitial = array.reduce(
    // syntax:(Exdample from official doc explain by me)
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
//current value means that array.
// accumulator for the 1st is initialvalue.
// so after first call (0) goes to accumulator ...then after (0,1)=0+1{this this no initialvalue is considering}
// so now accumulator is 0+1=1 and current value is 2.
// then accumulator is 1+2=3 and current value is 3
//  the accumulator is 3+3=6 and current value is 4.
//at last  value is 6+4=10.
// 0 + 1 + 2 + 3 + 4

console.log(sumWithInitial);
// Expected output: 10







// code on this:
const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)// 0 is initial_value

console.log(myTotal);






// another practice
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);