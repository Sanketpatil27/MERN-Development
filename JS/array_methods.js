let cars = ['audi', 'bmw', 'Lamborghini', 'Ferrari'];
cars.push("Rolls Royce");        // push at last position
console.log(cars);

console.log("Length of cars: ", cars.length)

cars.pop();     // removes last elem
console.log(cars);

// unshift, for adding at front
cars.unshift('Tesla');
console.log(cars);

// shift for deleting from front
let a = cars.shift();
console.log(a);

// return index if found else -1
console.log("Index of Ferrari: ", cars.indexOf('Ferrari'));
console.log("Index of FERRARI: ", cars.indexOf('FERRARI'));

// returns true if value found else false
console.log("cars has audi? ", cars.includes("audi"));

// concatening multiple arrays, returns new array
let rgb = ['red', 'green', 'blue'];
let pbs = ['purple', 'blue', 'seaBlue'];

let newCombo = rgb.concat(pbs);
// let newCombo = rgb.concat(pbs, rgb);  // can concat as manyas want
console.log("concatenate: ", newCombo);

// reverse the original array
rgb.reverse();
console.log("reversed rgb: ", rgb);

// slicing (last value is excluding)
console.log(cars);
console.log(cars.slice(1, 3));
console.log(cars.slice(-2, 4));     // -2 means from backside
console.log(cars.slice(-9));     // gives all it have

// splice:  removes/ replaces / add elements in place  ** make changes in original array **
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'brown'];
console.log("Original colors: ", colors);
colors.splice(0, 1);    // start from 0 & delete 1
console.log('After spicing: ', colors);
colors.splice(99, 1);    // start from 99 & delete 1
console.log('After spicing from 99: ', colors);
colors.splice(99, 0, 'empty');    // start from 99 & delete 0, add 1
console.log('After spicing from 99: ', colors);
colors.splice(0, 0, 'orange');    // start from 0 , delete 0 & add orange
console.log('After spicing: ', colors);
colors.splice(2, 1, 'black', 'grey');    // start from 2 & delete 1 & insert 2 new values on start index
console.log('After spicing: ', colors);

// if we want to push new elem on specified index
colors.splice(3, 0, 'spaceship');   // delete 0 push 1 on index 3
console.log('After spicing: ', colors);

// sort original array (doesn't work well on numbers)
// sort() method first convert values in string & then sort, so for numbers
// it converted to string so it doesn't work well
let chars = ['x', 'z', 'l', 'n'];
chars.sort();
console.log(chars);

let nums = [23,34,12,65,3];
nums.sort();
console.log(nums);

function logThing(str) 
{
   console.log(str);
}

// for every elem in nums call logThing function (callbacks)
nums.forEach(logThing);

let ar = [];
ar.push({category: 'food', price: 23});
ar.push({category: 'food', price: 3});
console.log(ar);
console.log(ar[0]);
console.log(ar[10]);

// to removing all elems from array, there are 2 methods:
// ar.splice(0, ar.length);      
ar.length = 0;
console.log(ar);