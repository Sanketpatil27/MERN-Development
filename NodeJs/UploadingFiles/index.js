const express = require("express");
const path = require("path");
const multer = require("multer");


const PORT = 3000;
const app = express();

// whatever user will upload from frontEnd keep it in 'uploads/' folder (upload is a middleware basically)
const upload = multer({ dest: 'uploads/' });

// ejs setting
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// urlencoder used to parse form data   (just like for json we use express.json() middleware)
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.render("homepage");
})

// upload.single('name') for uploading single file, 'name' is from form input tag
app.post('/upload', upload.single('profileImage'), (req, res) => {
     console.log(req.body);
     console.log(req.file);

     return res.redirect("/");
})

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));