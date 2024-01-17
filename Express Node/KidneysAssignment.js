const express = require("express");
const app = express();
app.use(express.json());        // for post method, reading values (explain in README.md)

let users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    const JohnKidneys = users[0].kidneys;
    const noOfKidneys = JohnKidneys.length;
    let noOfHealthyKidneys = 0;
    let noOfUnHealthyKidneys = 0;

    for(let i = 0; i < JohnKidneys.length; i++)
    {
        if(JohnKidneys[i].healthy)
            noOfHealthyKidneys += 1;
        else
            noOfUnHealthyKidneys += 1;
    }

    console.log(JohnKidneys);
    res.json({noOfKidneys, 
        noOfHealthyKidneys, noOfUnHealthyKidneys})
});

// when we post request:
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });

    res.json({
        msg: "Done!"
    });
});

// replace all Unhealthy kidneys & put healthy kidneys there
app.put("/", function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }

    // required for postman to not stuck after sending reuqest
    res.json({});
})

// remove all unHealthy Kidneys
app.delete("/", function(req, res) {
    // we should return 411 if there is no unHealthy kidney
    if(!isThereAtleastOneUnhealthyKidney())
        res.status(411).json({
            msg: "You don't have any unhealthy kidney"
        })

    
    const newKidneys = [];

    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy)
        {
            newKidneys.push({
                healthy: true
            })
        }
    }

    // replace kidneys array
    users[0].kidneys = newKidneys;
    res.json({msg: "done"});
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].isHealthy)
            atleastOneUnhealthyKidney = true;   
    }

    return atleastOneUnhealthyKidney
}

app.listen(3000);