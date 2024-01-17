const express = require('express');
const app = express();
const port = 3000;

// app.use():- used when we know particular middleware have to use in every route then we use app.use() otherwise
// we can use different middleware for each route (these are normal function, we used it in `with_middleware.js` file)

// this is middleware code runs before any route
// req, res are same as route, next is: if we reach at middleware the flow can't go back to the route automatically 
// so we have to push it to the route usign next, otherwise it will stuck
app.use(function(req, res, next) {
    console.log("middleware working!");    
    next();
});

// we can make any no.of middlewares
app.use(function(req, res, next) {
    console.log("middleware2 working!");    
    next();
});

// '/' is route, req = request, contains user data from request, 
// res = has controls from which we can send response by server
app.get('/', function(req, res) {
  res.send('Hey there!');
});

app.get('/profile', function(req, res) {
  res.send("My Profile: ");
});


// what if we want to create multiple routes as:
// /profile/virat
// /profile/rohit
// /profile/shikhar
// so will we create 3-different routes for 3 user profiles? - No
// here we use Dynamic Routing using /:username, after colon: it accept anything in that space
app.get('/profile/:username', function(req, res) {
    // we are accessing parameter from user request, name of that parameter is username
    res.send(`Hello from ${req.params.username}`);
})


app.listen(port);