const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:KUOMZ3v7gfyPGlVA@cluster0.dikomqc.mongodb.net/userappnew');

const express = require("express");
const app = express();
app.use(express.json());        // for post request

// desing model
const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    // check if user already exist  (findOne is a promise)
    const existingUser = await User.findOne({email: username});
    if(existingUser) {
        return res.status(400).send("Username already exist");
    }

    const user =  new User({
        name: name,
        email: username,
        password: password
    });

    user.save();  

    res.json({
        "msg": "user created successfully!"
    });
})

app.listen(3000);