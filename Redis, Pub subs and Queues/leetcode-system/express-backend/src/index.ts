import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());


// should do async await, in function called startServer, so before any operations, client gets connected
const client = createClient();
client.connect();

app.post("/submit", async (req, res) => {
    const {problemId, userId, code, language} = req.body;

    try {
        // first argument:"submissions" is the name of the queue, 2nd arg: payload
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language}));
    
        return res.json({msg: "submission received"});
        
    } catch (e) {
        return res.json({msg: e});
    }
})


app.listen(3000, () => {
    console.log("server started!");
});