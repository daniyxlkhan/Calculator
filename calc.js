let a = '';
let b = '';
let o = '';

const display = document.querySelector("#display");
const content = document.createElement("div");

content.classList.add("content");
content.textContent = "0";
let isSecondOperand = false;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (!isNaN(value) || value === '.') { // Digit pressed
            if (!isSecondOperand) {
                if (value === '.' && a.includes('.')) return;
                a += value; // Append digits to `a`
                content.textContent = a;
            } else {
                if (value === '.' && b.includes('.')) return;
                b += value; // Append digits to `b`
                content.textContent = b;
            }
        } else if (value === "=") { // compute the result
            if (a && b && o) {
                const result = operate(parseFloat(a), o, parseFloat(b));
                content.textContent = result;
                a = result;
                b = '';
                o = '';
                isSecondOperand = false;
            }
        } else if (value === "AC") { // reset the display
            a = '';
            b = '';
            o = '';
            isSecondOperand = false;
            content.textContent = '0';
        } else { // Operator pressed
            if (a) { // let the operator be used only if the first operand has been given
                o = value;
                isSecondOperand = true;
            }
        }
    });
});

display.appendChild(content);

function operate (a, o , b){
    switch (o) {
        case '+':
            return addition(a, b);
        case '−':
            return subtract(a,b);
        case '÷':
            return divide(a, b);
        case '×':
            return multiply(a, b);
        default:
            return NaN;
    }
}

function addition(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function divide(a, b) {
    return b === 0 ? "Error" : a / b;
}

function multiply(a, b){
    return a*b;
}