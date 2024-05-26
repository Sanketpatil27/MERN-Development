const fs = require('fs');

// Sync method
// write into file(creates file if not already present)
// fs.writeFileSync('./test.txt', "Hey There, how are you? ");

// async method, take a callback
// fs.writeFile('./test.txt', "Hello Async ", (err) => {});

// 2nd parameter for encoding strings
// read = fs.readFileSync('./test.txt', 'utf-8');
// console.log(read);

// async method doesn't return any value, it takes a callback
fs.readFile('./test.txt', 'utf-8', (err, result) => {
    if(err) 
        console.log("error: ", err);
    else
        console.log(result);
});

// appending data
// fs.appendFileSync('./test.txt', "appended ");

// copy first file into second parameter file
// fs.cpSync('./test.txt', './copy.txt');

// deleting file
// fs.unlinkSync('./copy.txt');

// get statics of file
console.log(fs.statSync('./test.txt'));

// make directory
// fs.mkdirSync('dir');
// multiple directories
// fs.mkdirSync('dir/1/2', { recursive: true });
