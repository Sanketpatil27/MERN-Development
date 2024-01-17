// filtering
// given an input array, give back the even values from it

const arr = [1, 2, 3, 4, 5];

// brute force:
const newArr = [];
for(let i of arr)
    if(i % 2 == 0)
        newArr.push(i);

console.log(newArr);

// other logic
function filterLogic(n) {
    if(n%2 == 0)
        return true;
    return false;
}

let ans = arr.filter(filterLogic);
console.log(ans);

// difference with map function;
ans = arr.map(filterLogic);
console.log(ans);