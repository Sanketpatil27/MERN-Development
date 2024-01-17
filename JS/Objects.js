const stud = {
    name: "shradha",
    age: 23,
    marks: 98.99,
    friends: ['shikhar', 'rohit']
};

let keys = Object.keys(stud);       // list of keys
console.log(keys);

let values = Object.values(stud);       // list of values
console.log(values);

let entries = Object.entries(stud);  // list of list containing key-values
console.log(entries);

let hasProp = stud.hasOwnProperty("age");
console.log("has the property?: ", hasProp);

// merge 2 objects together, params: {} (empty Obj), original object, new property
let newObj = Object.assign({}, stud, {newProperty: "newValue"});
console.log("after Object.assign(): ", newObj);