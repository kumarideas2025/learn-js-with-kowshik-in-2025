//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};


// we use let so that we can changes value (const will not give that right)
// we use intervalId as global so we can use it in stopChang color()[if we do it scope we can not use it for stopChange color]
let intervalId;
const startChangingColor = function () {
     function changeBgColor() {
    document.body.style.backgroundColor = randomColor();//this will change bg color [it takes as function reference]
  }
  if (!intervalId) { //this means if where is  intervalId then code will change color   (otherwise it takes it is null)
    intervalId = setInterval(changeBgColor, 1000);//get a function refer(changeColor[that include a random color] ) and gave a 1000 break
  }
 };




const stopChangingColor = function () {
  clearInterval(intervalId);//take global sope value
  intervalId = null;// so that there will free memory space
};




//here both start and stop are taken as refer of function .
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

