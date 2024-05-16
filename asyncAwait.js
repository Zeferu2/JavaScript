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

function studentsData() {
    return students;
}
async function fetchStudents() {
const response= await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
return response.json(); 
console.log(data);
}
const result = fetchStudents();
result.then((data) => {

console.log(data);})