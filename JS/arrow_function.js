function sum(a, b) {
    return a + b;
}

app.get("/", function(req, res) {

})

const ans = sum(1, 2);
console.log(ans);

// arrow function:
const sm = (a, b) => {
    return a + b;
}

app.get("/", (req, res) => {
    
})

console.log(sm(1, 2));