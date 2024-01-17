const fs = require("fs");

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the 
// specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open('FS.txt', 'w', (err, file) => {
    if(err)
        throw err;
    console.log('File is opened!');
})

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not 
// exist, a new file, containing the specified content, will be created:
fs.writeFile('FS.txt', "written content", (err) => {
    if(err)
        throw err;
    console.log('new content has been Overriden written!');
})

// if writeFile call work after append Call then only written data will be displayed coz, overriden
fs.appendFile('FS.txt', '\nappended text!', (err) => {
    if(err)
        throw err;
    console.log('appended!');
})


// this operation goes in callback stack & executes after further operation completion
fs.readFile("FS.txt", "utf-8", (err, data) => {
    console.log(data);
})
