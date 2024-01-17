// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be
// ```
// hello world my name is raman
// ```

const fs = require("fs");

// usign promise coz writeFile should only run after completion of readFile, otherwise no data will be cleaned
// simply making it synchronous
function readFile() {
    return new Promise((resolve) =>{
        fs.readFile('dirty.txt', 'utf-8', (err, data) => {
            resolve(data);
        })
    });
}


// now write back after making it clean, replacing spaces with single space & triming
function cleanFile(dirtyData) {
    let cleanData = dirtyData.replace(/\s+/g, ' ').trim();

    fs.writeFile('dirty.txt', cleanData, (err) => {
        console.log('Dirty Data: ', dirtyData);
        console.log('After cleaning: ', cleanData);
    });
}

readFile().then(cleanFile);