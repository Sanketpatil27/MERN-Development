function sqSum(a, b, callback)
{
    a = callback(a);
    b = callback(b);

    console.log("Square Addition is: ", a+b);
}

// anonymous means function without a name, we don't require to give name to this function
sqSum(2, 3, function(n) {
    return n*n;
});