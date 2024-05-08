const data = `[
    {
        "title": "JavaScript",
        "author": "Berhe",
        "publishedYear": 2019,
        "price": 10.99
    },
    {
        "title": "Java",
        "author": "Haile",
        "publishedYear": 2010,
        "price": 9.99
    },
    {
        "title": "Python",
        "author": "Hagos",
        "publishedYear": 2020,
        "price": 12.99
    }
]`;

const parsedBooks = JSON.parse(data);
console.log("parsedBooks", parsedBooks);
const priceSum = parsedBooks.reduce((total, book) => total+book.price, 0); 

console.log("priceSum", priceSum);
const filteredBooks = parsedBooks.filter((book )=> book.publishedYear < 2019);

console.log("filteredBooks", filteredBooks);
const sortedBooks=parsedBooks.sort((book1, book2) => book1.publishedYear - book2.publishedYear);

console.log("sortedBooks", sortedBooks);



