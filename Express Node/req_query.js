const express = require("express");
const app = express();

function sum(n) {
    let ans = 0;

    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }

    return ans;
}

// query is anything that happens after '?' like /about/?n=3
app.get("/", function(req, res) {
    const n = req.query.n;
    let ans = sum(n);
    res.send("Hii, your ans is: " + ans);
})

app.listen(3000);