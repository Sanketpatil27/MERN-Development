
// change start state of array to final form using splice
let start = ['january', 'july', 'march', 'august'];
let final = ['july', 'june', 'march', 'august'];

// start from 0th index, delete 2 elems & add further 2 elems in same order
start.splice(0, 2, "july", "june");
console.log(start);
console.log(final);

// Q2. return index of "javascript" in array if it was reversed.
let arr = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log("Index of javascript normal: ", arr.indexOf('javascript'));
console.log("Index of javascript if reversed: ", arr.reverse().indexOf('javascript'));
