const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array

    let isExist = ALL_USERS.find(obj => obj.username == username && obj.password == password)

    // or can use loop:
    // for(obj of ALL_USERS)  {
    //     if(obj.username == username && obj.password == password)
    //         return true;
    // }

    return isExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    // it verify if the given token is generated using given password
    // it will throw an error auotmatically if verification failed
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    // we filter and send only users that don't have access
    res.json({
      users: ALL_USERS.filter(function(value) {
        if(value.username == username)
            return false;
        return true;
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)