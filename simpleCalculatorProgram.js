// Declaring a function
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
   
    if (num2 == 0) {
        console.log("Erorr: Number Cannot divide by 0");
        return null;
    }

        return num1 / num2;
    }

// performing operations
let num1 = 10;
let num2 = 20;

console.log(add(num1, num2));

console.log(sub(num1, num2));

console.log(multiply(num1, num2));

console.log(divide(num1, num2));
