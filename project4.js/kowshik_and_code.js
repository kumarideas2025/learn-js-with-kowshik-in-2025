
let randomNumber = parseInt(Math.random() * 100 + 1);// const creat problem to generate random number regularly.

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // this is an empty paragraph

let prevGuess = []; // will store all previous given array
let numGuess = 1; // will start from that position

let playGame = true; // assume that playing is start

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); // give me that proper value
    console.log(guess);
    validateGuess(guess);// pass guess value to function valid guess
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess); // this will add the number into the empty array
    if (numGuess === 11) {
      displayGuess(guess); // will show the givin values
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess); //passing values
      checkGuess(guess); //passing value
    
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) { //this show if the number is generate by random opteration is same as we put that number in the box
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = ''; // will show our empty user input
  guessSlot.innerHTML += `${guess}, `; //will fill our empty slots
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `; // will show how many more times we can actually put our values
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; //this will add message to that empty paragraph....like less value / more values
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // this will make sure that user can not enter more value if he already put 10 value in  strick
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // this show we have to start the game again 
  startOver.appendChild(p); // this show the 10 steps in full and we have to put a new start game
  playGame = false; //untill we puss that button we an not paly again
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame'); // this will create new game space
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // again create number
    prevGuess = []; // again free  give array
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); // remove this option will give me abality to star putting new number in newly started game
    startOver.removeChild(p); // also to add the array we have to remopve that old paragraph

    playGame = true; // to able to play again
  });
}

