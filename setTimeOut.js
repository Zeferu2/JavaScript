function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log("hello from delayed message");

    }, 2000);
}

delayedMessage("hello from delayed message", 2000);