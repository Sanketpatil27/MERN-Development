const express = require("express");
const app = express();

app.use(express.json());


app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys!");
})

// using error catching midleware:
// server will crash if there kidney doesn't exit, or it doesn't have array it has number or string
// so we have to handle it, we can do this using global caches
// put this at end coz if there come any exception it will run
// using this if error happens this will return some clean thing instead any giblish error
app.use(function(err, req, res, next) {
    // console.log(err);       // this contains the error object
    res.json({
        msg: "Sorry, you are doing something wrong!!!"
    });
})

// as this there are lot of input validation we have to check like email, password, ..., 
// so instead of handling them seperately we use zod. it is set of liberaries that validate input

app.listen(3000);