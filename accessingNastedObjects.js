// what to do? Access a 'student' object
// how to do? Use dot notation to access the 'student' object
const student = {
    name: 'Berhe',
    age: 20,
    address: {
        street: '123 Main Street',
        city: 'New York',
        zipCode: '10001',
    }
}
console.log(`student name: ${student.name}`);
console.log(`student age: ${student.age}`);
console.log(`student city: ${student.address.city}`);
console.log(`student street: ${student.address.street}`);
console.log(`student Zipcode: ${student.address.zipCode}`);