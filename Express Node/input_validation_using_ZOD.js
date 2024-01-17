// as we see in previous input validation using middleware, using zod is convenient way
// to validate input

const express = require("express");
const app = express();

// including zod:
const zod = require("zod");

// 1 line of validation code to check if its array-of-numbers
// const schema = zod.array(zod.number());

// how to write schemas for following object:
// {
//     email: string => email
//     password = atleast 8 letters
//     country: "IN", "US"
// }
const schema = zod.object({
    email: zod.string().email(), 
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
});

app.use(express.json());        // for post method

app.post("/health-checkup", function(req, res) {
    let bodyObj = req.body;
    let response = schema.safeParse(bodyObj);

    // success is a key in response object so we can check its true or not like this: 
    if(!response.success) {
        res.status(411).json({
            // msg: "input is invalid!!"
            response
        });
    }

    else {
        res.send({
            response
        });
    }
})


app.listen(3000);