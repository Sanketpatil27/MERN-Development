const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// we need to require Admin, Course Module, & jwt
const { Admin, Course } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const isExist = await Admin.findOne({username});
    if(isExist)
    {
        res.json({msg: 'Admin already exists!!'});
        return;
    }

    await Admin.create({
        username, 
        password
    });

    res.json({msg: 'Admin created succesfully'});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if admin exist or not!
    const userExist = await Admin.findOne({username});
    if(!userExist)
    {
        res.status(411).json({msg: 'Incorrect username or password!'});
        return;
    }

    const token = jwt.sign({username}, JWT_SECRET);
    res.json({token});
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
                        title,
                        description,
                        price,
                        imageLink
                    });

    res.json({msg: "course created successfully!", courseId: newCourse._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allCourses = await Course.find();
    res.json({courses: allCourses});
});

module.exports = router;