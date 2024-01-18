const jwt = require('jsonwebtoken');

// decode, verify, generate

const value = {
    name: "harkirat",
    accountNumber: 123123123
}

// jwt
const token = jwt.sign(value, 'secret');
// this token has generated using this secret, and hence this 
// token can only be varified using this secret

console.log(token);
// this is my chequebook(token):
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwNTMyNTM2MH0.tdKOqFPp_UfPUzf2Yt7joI1oOqLoHxjBCSDc13uvW0c

// using this token we can go to `jwt.io` website and 'decode' it! and we can see our object there,
// its like, aah i have seen your chequebook and I can recreate it, means anybody can recreate the token using the decoded object:
// {
//     "name": "harkirat",
//     "accountNumber": 123123123,
//     "iat": 1705325360
// }
    
// but it will only verify using the same secret using what we have generated that token!
// so anyone can use that decoded object and recreate the same token!, but anyone can't find the same secrete value using which we generated that token! 
// so only server that sign it can verify it!

const varifiedValue = 
jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwNTMyNTM2MH0.tdKOqFPp_UfPUzf2Yt7joI1oOqLoHxjBCSDc13uvW0c', 'secret');

console.log(varifiedValue);


// trying to verify the from the token we got but,
// anyone can't find same secrete that used to sign
try {
    jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFya2lyYXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTcwNTMyNTM2MH0.tdKOqFPp_UfPUzf2Yt7joI1oOqLoHxjBCSDc13uvW0c', 'secreteDup');
}
catch {
    console.log("you don't have access to it!");
}