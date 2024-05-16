// what to do? to delay a massage.
// how to do? using promises with setTimeout.
// assume we have the folowing students data
const students = [
    {
        name: "Zeferu",
        age: 20,
        Education: "Bachelor"
    },
    {
        name: "Hagos",
        age: 30,
        Education: "Bachelor"
    },
    {
        name: "Abrham",
        age: 40,
        Education: "Bachelor"
    },

];
const simplePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const above20 = students.filter((student) => student.age > 20);
        if (above20.length > 0) {
        resolve(above20);
        } else {
        reject("No sudents above 20 years old found.");
        }
    }, 2000);
});
simplePromise.then(data => {
    console.log(" studens above 20 years old:" ,data);
}).catch((error) => {
    console.log("Error:" ,error);
    
});
console.log(simplePromise);

