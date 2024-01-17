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

const fs = require('fs').promises;

async function cleanFile() {
    let dirtyData = await fs.readFile('dirty.txt', 'utf-8');

    let cleanData = dirtyData.replace(/\s+/g, ' ').trim();

    await fs.writeFile('dirty.txt', cleanData, 'utf-8');
    console.log("file is cleaned:", cleanData);
}

cleanFile();