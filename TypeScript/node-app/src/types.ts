type Emp = {
    name: string,
    age: number
}

// doesn't require = sign
interface Emp2 {
    name: string,
    age: number
}

// both can be used here as emp type!
function greetEmp(emp: Emp2) {
    return emp.age;
}

greetEmp({
    name: "thor",
    age: 23
})