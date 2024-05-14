//1. using for loop. given an array 'numbers'
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//2. using forEach,Given an array of colors called 'colors',
const colors = ["red", "green", "blue"];

colors.forEach((color) => {
  console.log(color);
});
//3. Using map Method: Given an array of numbers called 'squaregrades'

const grades = [90, 80, 70, 60];

const squaredGrades = grades.map((grade) => grade * grade);

console.log(squaredGrades); 
//4. Using filter Method: Given an array of numbers called 'ages'
const ages = [10, 20, 30, 40, 50];

const newAges = ages.filter((age) => {
  return age > 30;
});

console.log(newAges);
