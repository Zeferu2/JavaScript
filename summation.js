function printSum(result) {
    console.log(result);
}

function sum(num1, num2, callback) {
    if (isNaN(num1) || isNaN(num2)) {
        return invalidInput;
    }
    const result = num1 + num2;
    callback(result);
}
sum(1, 2, printSum);
