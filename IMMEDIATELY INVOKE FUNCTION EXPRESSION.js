//----------------------IIFE-------------
// avoid from global scope pollution and immediate run


//normally
function one(){
    console.log(`DB CONNEcted`)
}
one();



//()--one for function call and 2nd one is for execution.
(function one(){
    //this is CALLED name IIFE

    console.log(`DB CONNEcted`)
})
();


//sometimes here you have to put ; to avoid error.


//arrow function
(()=>{
    //UNnamed iife
    console.log(`DB CONNEcted two`)
})
()



//give a  pera_meter
((name)=>{
    console.log(`DB CONNEcted two ${name}`)
})
('KOWSHIK')