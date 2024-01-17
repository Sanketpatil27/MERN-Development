// slightly better solution to use wrapper function: to avoid the previous check in each route(without_middlewares file) we can also use 
// functon that we call it in each route & validate input
// middlewares same like wrapper function here are they:

const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;

    if(username != 'admin' || password != 'pass') {
        res.status(400).json({
            msg: "User not found!!!"
        });
        return;
    }

    next();     // everything is fine here go to route
}

function kidneyMiddleware(req, res, next) {
    let kidneyId = req.query.kidneyId;
    if(kidneyId > 2)
    {
        res.status(400).json({
            msg: "how do you have so many kidneys?"
        });

        return;
    }

    next();     // everything is correct, go to route
}


// middlewares run before the routes
// we can write any no.of callbacks here:
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res) {
    res.status(200).json({
        msg: "everything is successfull"
    });
})


app.listen(3000);