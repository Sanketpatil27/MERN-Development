// interview Qs: `interfaces` let you allow to implement in classes while `types` can't

// here it is voilating the dry principle (Do not repeat yourself)
// coz we using type for user in 2 differnt fucntions, so we use interface
interface User {
    name: string,
    age: number,
    email?: string      // ? optional thing that user can proivde
}

// wihtout interface
// function isLeagalNew(user: {
//     name: string,
//     age: number
// }) {
//     if(user.age > 18)
//         return true;
//     else 
//         return false;
// }

// with interface
function isLeagalNew(user: User) {
    if(user.age > 18)
        return true;
    else 
        return false;
}

function greetUser(user: User) {
    console.log("hello ", user.name);
}


const user = {
    name: "shark",
    age: 18,
}

isLeagalNew(user);
greetUser(user);