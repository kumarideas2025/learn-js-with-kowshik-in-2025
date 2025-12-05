const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')   //or we can selected by this 






// this tell gives me a method and said how many after interval i run this
setInterval(function(){
    let date=new Date()
// console.log(date.toLocaleTimeString()) // will give current time of my location.
 clock.innerHTML=date.toLocaleString();
},1000)