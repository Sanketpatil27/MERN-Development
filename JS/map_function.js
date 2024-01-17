// given an array return an new arrray in which every value
// is multiplied by 2
// ex:  [1, 2, 3, 4, 5, 6];
// o/p: [2, 4, 6, 8, 10, 12];

const input = [1, 2, 3, 4];

// solution:
const newArr = [];

for(i of input)
    newArr.push(i*2);

console.log(newArr);


// other solution:
function transform(i) {
    return i*2;
}

ans = transform(2);     // run this for every array element
console.log(ans);

// map function:
// we want to combine the inputArray and transform function 
ans = input.map(transform);
console.log(ans);