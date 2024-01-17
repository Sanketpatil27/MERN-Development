
// make start looks as final 
let start = ['january', 'july', 'march', 'august'];
let final = ['july', 'june', 'march', 'august'];

start.shift();          // for removing start
start.shift();     
start.unshift('july', 'june');  // insert at front as it is

console.log(start);
console.log(final);
