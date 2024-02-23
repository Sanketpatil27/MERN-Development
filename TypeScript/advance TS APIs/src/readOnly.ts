// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
// in const a = [1, 2, 5], as a is constant here but we can still change its internal values like a[0] = 3
// to prevent this we can make internal values also read-only

type User1 = {
    readonly name: string,
    readonly age: number
}

// const user: Readonly<User1> = {      // can also do this for making all User1 readonly
const user: User1 = {
    name: 'John',
    age: 21
}

// user.age = 23;           // now we can't do like this: 