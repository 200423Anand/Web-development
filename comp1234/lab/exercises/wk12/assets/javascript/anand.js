
let num1 = parseFloat(prompt("first number:"));
let num2 = parseFloat(prompt("second number:"));


let operation = prompt("Choose one sign for futher step (+, -, *, /):");


let total;


if (operation === "+") {
    total = num1 + num2;
} else if (operation === "-") {
    total = num1 - num2;
} else if (operation === "*") {
    total = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        total = num1 / num2;
    } else {
        total = "Cannot divide by zero";
    }
} else {
    total = "Error";
}


document.write(num1 + " " + operation + " " + num2 + " = " + total);
