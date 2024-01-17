const express = require('express');
const app = express();
const port = 3000;

// '/' is route, req = request, res = response
app.get('/', function(req, res) {
  res.send('Hey there!');
})

app.get('/profiles', function(req, res) {
  res.send("My Profile: ");
})

app.listen(port);