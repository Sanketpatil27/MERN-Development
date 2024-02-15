function runAfter1second(fn: () => void ) {
    setTimeout(fn, 1000);
}

runAfter1second(function() {
    console.log("hi there");
});