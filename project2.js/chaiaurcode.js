 

// ```if we write outside of evenListener???
// const height=parseInt( document.querySelector('#height').value)  
// const wight=parseInt( document.querySelector('#weight').value)  


// what will happens?
// JavaScript reads this line before the user types anything.
// Because the input fields are empty on page load.
// Runs too early → inputs empty → values become NaN.






const form = document.querySelector('form');


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    //toFixed(2) will give 2 ranges in results
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

