const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    if (display.textContent === '') return;
    const lastChar = display.textContent.slice(-1);
    if (isNaN(lastChar) && lastChar !== '.') return;
    display.textContent += operator;
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
