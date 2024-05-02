// 1. Creatate an array of fruits like  'apple', 'banana', 'cherry'
const fruits = [`apple`, `banana`, `cherry`];
// 2. access the second element of the array
console.log("Second fruit", fruits[1]);
// 3. Change the third element of fruits array to `grapes`

fruits[2] = `grapes`;
console.log("Third fruit", fruits[2]);
// 4. array length, log the fruits array length.

console.log("Fruits array length", fruits.length);

// 5. Adding and removing of a new element, add 'kiwi' and then remove it from the fruits array.
fruits.push("kiwi");
console.log("kiwi added", fruits);
fruits.pop();
console.log("kiwi removed",fruits);
// 6. iterating with a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("for loop", fruits[i]);
}
// 7. iterating using forEach

fruits.forEach(fruit => {
    console.log("for each", fruit);
});
