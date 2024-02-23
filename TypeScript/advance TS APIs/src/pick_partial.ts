interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
}

// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).

// it is generic used to gate subset from interface User
// 1st argument: what you want to pick from, 2nd arg: all properties you wanna pick
type updateProps = Pick<User, 'name' | 'age' | 'email'>

const displayProfile = (user: updateProps) => {
    console.log(`${user.name}, ${user.age}, ${user.email}`); 
}  

displayProfile({
    name: "Alien",
    age: 235,
    email: "meetme@gmail.com"
})



// partial: Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
// same like pick, what if you want to select some optional parameters from the type/interface?
// in that case we use partial

type updatePropsOptional = Partial<updateProps>
// now we can pass optional fields to displayProfile function by giving use type: of above