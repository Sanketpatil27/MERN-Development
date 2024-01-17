const user = {
    name: "harkirat", 
    age: 24,
    gender: "male",
}

// console.log(user);
console.log(user['name']);

// what is we want to send the data to a friend or other process how to do it?
// i can pass it like:
const user1 = '{"name": "harkirat", "age": "24", "gender": "male"}';
// const user1 = 'name: male';          // this is not valid JSON
console.log(user1);
// console.log(user1['name']);         // but can't use this!!!


// to do the same we use JSON 
// JSON.parse           (string to object)
// JSON.stringfy        (object to string)

const user2 = JSON.parse(user1);
console.log(user2['age']);

const finalString = JSON.stringify(user);
console.log(finalString);