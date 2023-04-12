const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', add);

const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', subtract);

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', multiply);

function add() {
  const n1 = document.getElementById('num1').value;
  const n2 = document.getElementById('num2').value;

  const num1 = Number(n1);
  const num2 = Number(n2);

  const result = num1 + num2;

  const resultDisplay = document.getElementById('result');
  resultDisplay.innerHTML = result;
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
    resultDisplay.textContent = result
}