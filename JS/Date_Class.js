const currDate = new Date();

console.log("Current Date: ", currDate);

// getMOnth is 0-indexed so add 1 to it
console.log("Month: ", currDate.getMonth() + 1);
console.log("Year: ", currDate.getFullYear());
console.log("Date: ", currDate.getDate());
console.log("Hour: ", currDate.getHours());
console.log("munutes: ", currDate.getMinutes());
console.log("seconds: ", currDate.getSeconds());


// Get the time in HH:MM:SS AM/PM format
var time = currDate.toLocaleTimeString('en-US', { hour12: true });
console.log("Current Time: ", time);

// it will set given value and use it on onwords
currDate.setFullYear(1990);
console.log("Changed Year: ", currDate.getFullYear());

console.log("Time in milliseconds since 1970 To current setted FullYear:", currDate.getTime());

function calculateSum() {
    let sum = 0;
    for(let i = 0; i < 1000000000; i++)
        sum += i;

    return sum;
}

// calculaet how much time it take to complete function using Date class
const beforeDate = new Date();
const beforeTimeMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeMs = afterDate.getTime();

console.log("Time Taken by function in Ms: ", afterTimeMs - beforeTimeMs);

console.log("date now:", Date.now());
console.log("date now:", Date.now());