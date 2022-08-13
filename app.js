// https://calculator.swiftutors.com/ex-exponential-function-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const yourSolutionRadio = document.getElementById('yourSolutionRadio');
const xvalueRadio = document.getElementById('xvalueRadio');

let yourSolution;
let xvalue = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

yourSolutionRadio.addEventListener('click', function() {
  variable1.textContent = '(ex) Your Solution';
  xvalue = v1;
  result.textContent = '';
});

xvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'x value';
  yourSolution = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(yourSolutionRadio.checked)
    result.textContent = `Your Solution = ${computeYourSolution().toFixed(5)}`;

  else if(xvalueRadio.checked)
    result.textContent = `x value = ${computexvalue().toFixed(5)}`;
})

// calculation

function computeYourSolution() {
  return Math.exp(Number(xvalue.value));
}

function computexvalue() {
  
}