const fs = require('fs');   // filesystem module from node

// creating my own asynchronous function
function readFile() {

    const p = new Promise(function(resolve) {

        fs.readFile('a.txt', 'utf-8', function(err, data) {
             
            resolve(data);
        });
    })

    return p;
}


function onDone(data) {
    console.log(data);
}

readFile().then(onDone);

// ### Promise.all example in week-2 assignment
// ### Promise-Chain example in week-2 assignment