// normal code:
function AsyncFunction1() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("hi there! (normal)");
    });

    return p;
}

function main1() {
    // here we doesn't require .then(fun) logic, await will do that work here
    const p = AsyncFunction1();
    p.then(function(value) {
        console.log((value));
    })
}

main1();

console.log('---------');

// async await code:
function AsyncFunction2() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("hi there! (async)");
    });

    return p;
}

// without async function we can't use await
async function main2() {
    // here we doesn't require .then(fun) logic, await will do that work here
    const value = await AsyncFunction2();

    // await will work as .then it pause the next execution until promise resolves
    // if don't write await the promise itself will be returned not only the value
    console.log(value);
}

main2();

console.log('after main');