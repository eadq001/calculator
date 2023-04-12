const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', add);

const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', subtract);

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', multiply);

const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', divide);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

function add() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  const num1 = Number(n1);
  const num2 = Number(n2);

  const result = num1 + num2;

  const resultDisplay = document.getElementById('result');
  resultDisplay.textContent = result;
}

function subtract() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  const num1 = Number(n1);
  const num2 = Number(n2);

  const result = num1 - num2;
  const resultDisplay = document.getElementById('result');
  resultDisplay.textContent = result;
}

function multiply() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  const num1 = Number(n1);
  const num2 = Number(n2);

  const result = num1 * num2;
  const resultDisplay = document.getElementById('result');
  resultDisplay.textContent = result;
}

function divide() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  const num1 = Number(n1);
  const num2 = Number(n2);

  const result = num1 / num2;
  const resultDisplay = document.getElementById('result');
  resultDisplay.textContent = result;
}

function clear() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').textContent = '';
}
