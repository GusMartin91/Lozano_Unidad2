// Seleccionar los elementos del DOM
const operand1Input = document.getElementById("operand1");
const operand2Input = document.getElementById("operand2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resultDiv = document.getElementById("result");

// Funciones para realizar las operaciones
function sum() {
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    resultDiv.textContent = "Resultado: " + (operand1 + operand2);
}

function subtract() {
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    resultDiv.textContent = "Resultado: " + (operand1 - operand2);
}

function multiply() {
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    resultDiv.textContent = "Resultado: " + (operand1 * operand2);
}

function divide() {
    const operand1 = parseFloat(operand1Input.value);
    const operand2 = parseFloat(operand2Input.value);
    if (operand2 !== 0) {
        resultDiv.textContent = "Resultado: " + (operand1 / operand2);
    } else {
        resultDiv.textContent = "Resultado: Error (división por cero)";
    }
}

// Agregar event listeners a los botones
addButton.addEventListener("click", sum);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
