// another way to create object of key-value pair

type Usertype = {
    name: string,
    age: number
}

// const users = new Map();    // can use this OR: 
const users = new Map<string, Usertype>();
users.set("abc@xyz", {name: "Rog", age: 342});
users.set("xyz@abc", {name: "Asus", age: 542});

console.log(users.get('abc@xyz'));