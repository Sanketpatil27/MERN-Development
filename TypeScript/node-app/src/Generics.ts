// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.


type Input = number | string;

// function firstEl(arr: Input[]) {
function firstEl(arr: number[] | string[]) {    // to avoid the mixed array type causing Input
    return arr[0];
}

const value1 = firstEl(["harkirat", "singh"]);
// console.log(value1.toUpperCase());        // 1st problem:  give error toUppercase doesn't support on number(number also given in type Input!)
// console.log(firstEl([2, 3, 4, "dfa"]));   // 2nd problem: Input type don't complain if mixed values
// to avoid 2nd problem we can change the type of arr to only number or only string, should not mixed!


// What is the problem in this approach?
// User can send different types of values in inputs, without any type errors
// Typescript isn’t able to infer the right type of the return type


// Solution: `Generics` enable you to create components that work with any data type while still providing compile-time type safety.
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

output1.toUpperCase();


// output of our problem
function getFirstElem<T>(arr: T[]): T {
    return arr[0];
}

let output = getFirstElem<string>(['abcd', 'efgh']);
let outputNum = getFirstElem([23,34,32]);   // also don't need to specifyf <number> here
console.log(output.toUpperCase());