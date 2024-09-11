let num1= parseFloat(prompt('Enter first numbers'));
let num2= parseFloat(prompt('Enter second numbers'));
let operation = (prompt(`Please choose an arithmetic operation (+, -, *, /)`));
let total;
switch(operation) {
    case `+`:
        total = num1 + num2;
        break;
    case `-`:
        total = num1 - num2;
        break;
    case `*`:
        total = num1 * num2;
        break;

        case `/`:
        total = num1 / num2;
        break;
    default:
        alert(`operation is invalid.`);
}
 let display=  document.getElementById(`displayTotal`).innerText +=  `${num1} ${operation} ${num2} = ${total}`;
