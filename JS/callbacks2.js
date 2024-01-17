function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSquares(a, b) {
    val1 = square(a);
    val2 = square(b)
    console.log(val1 + val2);
}

function sumOfCubes(a, b) {
    val1 = cube(a);
    val2 = cube(b)
    console.log(val1 + val2);
}

sumOfCubes(1,2);
sumOfSquares(1,2);

// instead of upper code for sum of squares/cube, we can do it like:
function sumOfSomething(a, b, callback)
{
    val1 = callback(a);
    val2 = callback(b)
    console.log(val1 + val2);
}

sumOfSomething(12, 23, cube);
