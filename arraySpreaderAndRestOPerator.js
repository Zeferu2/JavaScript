// 1. spread operator: Given arrays 'fruits1' and 'fruits2', create a new array called 'allfruits'

const fruits1 = ['apple', 'banana', 'cherry'];
const fruits2 = ['grapes', 'mango', 'orange'];

const allFruits = [...fruits1, ...fruits2];

console.log(allFruits);
//2. spread operator for function arguments:create a function called 'addNumbers'
function addNumbers(a, b, c) {
    return a + b + c;
}

const numbers = [3, 4, 5];
const sum = addNumbers(...numbers);

console.log(sum);
// 3. Rest operator in function parameters: create a function called 'multiplyNumbers'

function multiply(firstNumber, ...restNumbers) {
    return restNumbers.reduce((result, num) => result * num, firstNumber);
}

const result = multiply(2, 3, 4);

console.log(result);

// 4. Spreading values from an array: Given an array 'colors'create a function called'copiedColors'

const colors = ['red', 'green', 'blue'];
const copiedColors = [...colors];

console.log(copiedColors);

