const express = require("express");
const app = express();

let totalRequests = 0;

app.use(express.json());        // use this middleware for post request (explained in readme.md file)

// global middleware (run for all routes)
app.use(function(req, res, next) {
    totalRequests++;
    next();
});

app.get("/", function(req, res) {
    console.log(totalRequests);

    res.json({
        msg: "requested counted!"
    })
});

app.post("/", function(req, res) {
    console.log(req.body);
    console.log(totalRequests);

    res.json({
        msg: "requested counted!"
    })
});

app.listen(3000);