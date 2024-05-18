// what to do? fetching data from an api
// how to do it? using fetch api.
async function fetchProducts() {
const response= await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
return response.json(); 
console.log(data);
}
const result = fetchProducts();
result.then((data) => {

console.log(data);})