console.log(operate(4, '+' , 4));

function operate (a, o , b) {
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
    return a/b;
}

function multiply(a, b){
    return a*b;
}