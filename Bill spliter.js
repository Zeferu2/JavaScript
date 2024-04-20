let totalBillAmount = 250;
let numberOfPeople = 6;
let tipPercentages = 20;
let taxPercentages = 10;
let tipamount = (totalBillAmount * tipPercentages)/100;

let taxamount = (totalBillAmount * taxPercentages)/100;

let totalAmount = totalBillAmount + tipamount + taxamount;

let individualBill = totalAmount / numberOfPeople;


console.log(`tiPamount: ${tipamount}`);

console.log(`taxamount: ${taxamount}`);

console.log(`totalAmount: ${totalAmount}`);

console.log(`individualBill: ${individualBill}`);

