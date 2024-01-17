// mongoose is library which used to connect mongodb

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:KUOMZ3v7gfyPGlVA@cluster0.dikomqc.mongodb.net/userappnew");
// connect with mongodb compass, `/userappnew` at last is the database that we trying to access

// design schema for database: `Users` is the table name
const User = mongoose.model('Users', {name: String, email: String, password: String});
const user = new User({
  name: "Rohit", 
  email: "rohit@gmail.com", 
  password: "2342"
});

user.save();    // to store in database