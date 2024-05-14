// what to do? to validate email.
//how to do? using a callback function.
const printEmail = (email) => {
    console.log(email);
}
function validateEmail(email, callback) {
    let at=email.includes('@');
    let dot=email.includes('.');
    if (at && dot) {
        callback(email);
    } else {
        console.log('invalid email');
    }}
    validateEmail('zeferu@gmail.com', printEmail);
    validateEmail('zeferu@gmail', printEmail);
