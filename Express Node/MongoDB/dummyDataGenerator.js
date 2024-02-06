// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button clicked, generate data
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection


const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());        // for post request

mongoose.connect("mongodb+srv://admin:KUOMZ3v7gfyPGlVA@cluster0.dikomqc.mongodb.net/company");

const employeeSchema = mongoose.Schema({
    name: String,
    salary: Number,
    city: String,
    isManager: Boolean
});

const emp = mongoose.model('employees', employeeSchema);

app.get('/', function(req, res) {
    res.sendFile('dummyRecords.html', {root: __dirname});
})

app.post('/generator', async function(req, res) {
    const name = req.body.name;
    const salary = req.body.salary;
    const city = req.body.city;
    const isManager = req.body.isManager;

    const user = await emp.create({
        name,
        salary,
        city,
        isManager
    })

    res.json(user);
})


app.listen(3000, () => {
    console.log('listening on port 3000');
});

const data = JSON.stringify({
    "title": "hello",
    "salary": 23323,
    "city": "new york",
    "isManager": true
  });