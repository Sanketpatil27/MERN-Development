const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// we require some modules
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if username already exist
    const userExist = await User.findOne({username});
    if(userExist) {
        res.status(411).json({msg: 'User already exist with this username!'});
        return;
    }

    User.create({
        username,
        password
    });

    res.json({message: "User created successfully!"});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;     

    // check if this username exist or not
    const userExist = await User.findOne({username});
    if(!userExist) {
        res.status(411).json({msg: 'Username doesnt exist!'});
        return;
    }

    const token = jwt.sign({username}, JWT_SECRET);     // we donesn't need password here
    res.json({token});
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    // user doesn't need to log in for viewing the list of courses
    const courseList = await Course.find();
    res.json({courses: courseList});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // here user not sending username from req, but we have set it userMiddleware to access it here
    const username = req.username;
    const courseId = req.params.courseId;

    await User.updateOne({
            username
        }, { 
            "$push": {
                purchasedCourses: courseId
            }
        }
    )

    res.json({msg: 'Course Purchased successfully!'});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.username;
    const user = await User.findOne({username});

    // it is array of id's of purchased courses
    const purchasedArr = user.purchasedCourses;
    console.log(purchasedArr);

    // it contain array of objects that has id same as user perchased courses id's
    const purchasedCourses = await Course.find({
        _id: {
            $in: purchasedArr
        }
    });
    console.log(purchasedCourses);

    // now we extract title from objects that purchasedCourses contain
    const ans = [];
    for(obj of purchasedCourses)
        ans.push(obj.title);

    res.json({purchasedCourses: ans});
});

module.exports = router