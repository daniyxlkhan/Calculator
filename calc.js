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
        } else if (value === "=") {
            if (a && b && o) {
                const result = operate(parseFloat(a), o, parseFloat(b));
                content.textContent = result;
                a = result.toString();
                b = '';
                o = '';
                isSecondOperand = false;
            }
        } else if (value === "AC") {
            a = '';
            b = '';
            o = '';
            isSecondOperand = false;
            content.textContent = '0';
        } else { // Operator pressed
            if (a) {
                o = value;
                isSecondOperand = true;
            }
        }
    });
});

display.appendChild(content);



function operate (a, o , b){
    if (o === '+') {
        return addition(a, b);
    } else if (o === '-') {
        return subtract(a, b);
    } else if (o === '/') {
        return divide(a, b);
    } else if (o === '*') {
        return multiply(a, b);
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