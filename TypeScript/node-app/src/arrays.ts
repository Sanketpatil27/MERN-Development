type numberArr = number[];

function arr(ar: numberArr) {
    let max = 0;
    return max;
}

arr([1,23,4]);


// assignment
// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface newUser {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: newUser[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));