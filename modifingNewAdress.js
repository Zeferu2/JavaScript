const student = {
    name: 'Berhe',
    age: 20,
    address: {
        street: '123 Main Street',
        city: 'New York',
        zipCode: '10001',
    }
}
// what to do? adding a new adress
// how to do/ declare a new adress inside the 'student' object
 
student.greet = function() {
    console.log('hello'.concat(student.name));

}
let newStreet = '145 Main Street';
let newCity = 'New York';
let newZipCode = '75218';
student.changeAddress =(newStreet, newCity, newZipCode) => {
    student.address.street = newStreet;
    student.address.city = newCity;
    student.address.zipCode = newZipCode;
}

student.greet();

student.changeAddress(newStreet, newCity, newZipCode);
console.log(`student city after modification: ${student.address.city}`);
console.log(`student street after modification: ${student.address.street}`);
console.log(`student zipCode after modification: ${student.address.zipCode}`);
console.log(student.address);


