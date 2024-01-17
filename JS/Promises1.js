function AsyncFunction() {
    let p = new Promise(function(resolve) {
        setTimeout(function() {
            // do some async logic here
            resolve("Hi there!");
        }, 1000);
    });
    
    return p;
}

// it returns Promise
let p = AsyncFunction();
console.log(p);     // it's pending not resolved yet


p.then(function(value) {
    console.log(value);
    console.log(p);         // now it resolved so print the value
});
