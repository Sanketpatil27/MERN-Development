// ## Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function displayCounter() {
    let currDate = new Date();
    console.log(currDate);
}

setInterval(displayCounter, 1000);   // run after every 1 second