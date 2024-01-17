function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    // return result;

    // approach2:
    // displayResult(result);


    // with fnToCall
    fnToCall(result);
}

function displayResult(data) {
    console.log("result sum is: " + data);
}


// You are only allowed to call one function after this 
// how will you displayResult of Sum?

// approach1:
// const ans = sum(1, 2);
// displayResult(ans);

// what is you cannot change any functions?
// we can use fnToCall that allows to pass function as argument
const ans = sum(1, 2, displayResult);


function greet() {
    console.log('Hello world!');
}

// this is also callBack, we are passing greet
setTimeout(greet, 3*1000);  // 3 secs pause (3 * millisecs)
