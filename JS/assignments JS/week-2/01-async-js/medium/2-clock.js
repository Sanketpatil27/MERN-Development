// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval( () => {
    const currDate = new Date();
    // let h = currDate.getHours();
    // let m = currDate.getMinutes();
    // let s = currDate.getSeconds();

    // console.log("current Time:", h+":"+m+":"+s);

    // OR :

    // Get the time in AM/PM format
    var ampm = currDate.toLocaleTimeString('en-US', { hour12: true });
    // Output the result
    console.log("Current Time: ", ampm);

}, 1000);
