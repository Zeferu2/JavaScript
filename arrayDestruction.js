//1. destructing an array. with agiven  colors of ['red', 'green', 'blue'] in to variables color1, color2.
const colors = ['red', 'green', 'blue'];
const [color1, color2] = colors;

console.log(color1);
console.log(color2);

//2. skiping  elements of an array
const numbers = [1, 2, 3, 4, 5];
const [, , thirdNumber] = numbers;

console.log(thirdNumber);

//3. Rest Parameter: 

const fruits = ['apple', 'banana', 'orange'];
const [firstFruit,...otherfruits] = fruits;

console.log(firstFruit);
console.log(otherfruits);
//4. destruct shape:
const shapes = [];
const [firstShape = 'circle'] = shapes;

console.log(firstShape); 
//5. swapping values

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);

console.log(b);

