// https://leetcode.com/problems/join-two-arrays-by-id/
// short question:
// If two objects share an id, their properties should be merged into a single object:
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

// Example:

// Input: 
// arr1 = [    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}  ]
// arr2 = [    {"id": 1, "b": {"c": 84}, "v": [1, 3]}   ]
// Output: [   {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48} ]
// Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.

var join = function (arr1, arr2) {
    let res = [];

    // trying to use 2 pointers approach so store the objects key vice
    // sort the array according to the id's shold be first
    arr1.sort((a, b) => a.id - b.id);
    arr2.sort((a, b) => a.id - b.id);
    let i = 0, j = 0;
    let n = arr1.length;
    let m = arr2.length;

    while (i < n || j < m) {
        if(i<n && j<m && arr1[i].id === arr2[j].id) {
            res.push({...arr1[i++], ...arr2[j++]});
        } 
        else if(i<n && j<m && arr1[i].id < arr2[j].id || j == m) {      // also run if arr2 has completed(j==m)
            res.push(arr1[i++]);
        }
        else if(i<n && j<m && arr1[i].id > arr2[j].id || i == n)       // also run if arr1 has completed(i==n)
            res.push(arr2[j++]);
    }

    return res;
};


arr1 = [{"id":1,"b":{"b": 94},"v":[4,3]}];
arr2 = [{"id":1,"b":{"c": 84},"v":[1,3],"y":48}];
const merged = join(arr1, arr2);
console.log(merged);