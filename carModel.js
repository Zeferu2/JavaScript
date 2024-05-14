// what to do? create a 'car' object
// how to do? declare a const object name 'car' with defined properties

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    
}

console.log(`car make : ${car.make}`);

console.log(`car model : ${car.model}`);

console.log(`car year : ${car.year}`);

// we want to add a new method to the 'car' object
car.startEngine = function() {
    console.log('Engine started');
}

car.startEngine();// way to invoke the method
// create an object literal for a book's title, author, and pageCount

const book = {
    title: 'Toyota camry manual',
    author: 'tom',
    pageCount: 200,
}

console.log('Book:', book);




