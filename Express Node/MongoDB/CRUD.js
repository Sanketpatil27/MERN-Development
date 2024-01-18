// creating HTTP server
const express = require('express');
const app = express();

// connecting node.js with mongodb with help of mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:KUOMZ3v7gfyPGlVA@cluster0.dikomqc.mongodb.net/CRUD');

// defining schemas for user
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// creating user model
const User = mongoose.model('Users', userSchema);

// creating user
app.get('/addUser', (req, res) => {
    let name = req.query.name;
    let email = req.query.email;

    const user = new User({
        name: name,
        email: email
    });

    user.save();
    res.json(user);
})

// deleting User
app.get('/deleteUser', async function(req, res) {
    const deleted = await User.findOneAndDelete({name: "\"ant-man\" email=\"ant@gmail.com\""});
    console.log(deleted);

    if(!deleted) {
        res.send("User Not Found!!!");
        return;
    }
    
    res.send(deleted);
})


app.listen(3000);