const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// we need admin & Course Module here
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async function (req, res) {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // we should if admin with this username already exist!
    const existAdmin = await Admin.findOne({username: username});

    if(existAdmin)
    {
        res.json({message: 'Admin account already exist!!'});
        return;
    }

    // `Admin.create({})` is shouthand for creating and saving a document in 
    // single step, while `new Admin({})` involves creating & then saving
    await Admin.create({
        username: username,
        password: password
    });
    
    res.json({
        message: 'Admin created successfully'
    });

});

// only admins can add courses!
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        // title: title,
        // description: description,
        // price: price,
        // imageLink: imageLink
        // instead above we do this if same key-value
        title,
        description,
        price,
        imageLink
    });

    console.log(newCourse);
    res.json({message: 'Course creted successfully', courseId: newCourse._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find();

    console.log(allCourses);
    res.json({courses: allCourses});
    // res.json({courses: 'hi there!'});
});

module.exports = router;