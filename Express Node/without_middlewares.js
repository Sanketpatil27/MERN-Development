const express = require("express");
const app = express();

// dumb way of doing authentication or input validation:

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    
    // both username & password should be correct
    if(username != "harkirat" || password != "pass") {
        res.status(400).json({"msg": "wrong name OR password!"});
        return;
    }
    
    if(kidneyId > 2) {
        res.status(400).json({"msg":"How do you have so many kidneys?"});
        return;
    }
    
    res.json({msg:"Your kidney is Fine!"});
})

// we can't do validation like it for all routes, so we use middlewares

app.listen(3000);