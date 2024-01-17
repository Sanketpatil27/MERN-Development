
let singer = {
    name: "Dua Lipa",
    age: 23,
    songs: 'One Kiss'
};

// same as above
let singer2 = ["Dua Lipa", 23, "one kiss"];

console.log(singer);
console.log(singer2);

// here constant concept same as array
// we can change internal values in stud
const stud = {
    name: "shradha",
    age: 23,
    marks: 98.99,
    friends: ['shikhar', 'rohit']
};

console.log(stud.age);
console.log(stud['age']);
stud.age = 78;

console.log(stud);

const obj = {
    1: 'a', 
    2: 3,
    null: 'NULL',
    undefined: 'und'
}

// javascript converts square brackets items in string first, its not index
obj[1];

// but '.' operator doesn't convert to string directly
// obj.1;  // give error

obj.undefined;
obj.null;