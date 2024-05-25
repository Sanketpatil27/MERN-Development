const express = require("express");
const path = require("path");
const multer = require("multer");


const PORT = 3000;
const app = express();

// whatever user will upload from frontEnd keep it in 'uploads/' folder (upload is a middleware basically)
// const upload = multer({ dest: 'uploads/' });

// now we don't need above upload instance coz we are enable to open the uploaded files!!
// so we create disk storage. The disk storage engine gives you full control on storing files to disk.
// it has 2 options that determines where the file should b estored.
const storage = multer.diskStorage({
    // req: original request object, file: file which user trying to upload, cb: callback fn it has 2 params 1. error 2. name of folder destination
    destination: function(req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        // we can put original file name from file.originalname but it can override if same name file uploaded by other user
        // so we make our own fileName by giving it prefix of unique date
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

// now we make upload
const upload = multer({ storage: storage });

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