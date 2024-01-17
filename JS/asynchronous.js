// https://latentflip.com/loupe/
// asynchronous means parellel executing tasks

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) 
        ans += i;
    
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}

// this set time for the function to run, but log doesn't wait for completing this 
// it execute parallely
setTimeout(findSumTill100, 1);  // 1 millisecond
console.log("I don't wait!");

// some other examples of async programming- reading file, featching data from API
const fs = require("fs");   // fileSystem module, for reaching & writing into file

// this  is asynchronous call, it takes some time to execute
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

// to make upper call synchronous we use to custom wait for program that take long time
// even after readFile completed it waits for thread to complete this loop, and after thread become
// idle then it goes to complete next work then it goes to complete its pending work
// It does not block the asynchronous file reading operation due to the event-driven nature of Node.js
let a = 0;
for(let i = 0;  i < 10000000000; i++)
    a++;

// it execute before file loading
console.log("I don't wait to load file!!!")