const buttons=document.querySelectorAll('.button')
// console.log(buttons)
const body=document.querySelector("body") // in query selector we gave directly the tag name


//events we learn further: means we tap any click or move mouse any further.
buttons.forEach(
    function(button){
        console.log(button)
        button.addEventListener('click',function(e){
             console.log(e)
             console.log(e.target)
             // after eventLister if we one inspect and click any of those color we find that particular color show.
          

             // now we can change the color of background and for this we have to tape one color than that color will took background
             if(e.target.id=='grey'){
                body.style.backgroundColor=e.target.id
             }
             if(e.target.id=='white'){
                body.style.backgroundColor=e.target.id
             }
             if(e.target.id=='yellow'){
                body.style.backgroundColor=e.target.id
             }
             if(e.target.id=='blue'){
                body.style.backgroundColor=e.target.id
             }

             // this one we add so that we add in html but not do anything in css . lets see it is working?
             if(e.target.id=='pink'){
                body.style.backgroundColor=e.target.id
             }
        })
    }
)