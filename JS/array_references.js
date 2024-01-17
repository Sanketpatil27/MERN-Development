
let arr = [1, 2, 3, 4];
arrCpy = arr;   

// now arrCpy stores reference of arr, if arrcpy changes 
// arr also changes 
arrCpy.push(54);
arr.shift();    // removes first elem in arr

console.log(arrCpy);
console.log(arr);
