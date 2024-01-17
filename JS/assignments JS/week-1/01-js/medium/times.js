/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let currDate = new Date();
    let timeBefore = currDate.getTime();
    console.log("Before: ", timeBefore);

    let sum = 0;
    for(let i = 0; i < n; i++)
        sum += i;

    currDate = new Date();
    let timeAfter = currDate.getTime();
    console.log("after:  ", timeAfter);

    
    // we need to return time in seconds & getTime returns in milliseconds, so convert & return:
    // 1000 miliseconds in 1 second so divide by 1000 to result

    return (timeAfter - timeBefore) / 1000;
}

// my driver code
console.log("Time required for function to run: ", calculateTime(1000000000), ' seconds');