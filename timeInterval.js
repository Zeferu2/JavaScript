// what to do? set time interval
// how to do ? using function countdown.
function countdownTimer() {
    let counter = 5;
    const interval = setInterval(() => {
        counter--;
        if (counter === 0) {
            console.log("Done");
            clearInterval(interval);
        }
    }, 1000);
}
    countdownTimer(5);