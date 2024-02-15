function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}
greet("Iron Man");

// type inference (auto understand function is returning number here)
// function sum(a: number, b: number): number {
function sum(a: number, b: number) {
    return a + b;
}

const value = sum(23, 34);
console.log(value);

function isLeagal(age: number) {
    if(age > 18)
        return true;
    else 
        return false
}

console.log("Is leagal?: ", isLeagal(23));
