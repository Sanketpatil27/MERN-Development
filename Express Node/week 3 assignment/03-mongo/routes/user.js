const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// we need User & Course module here
const { User, Course } = require('../db');

// User Routes
router.post('/signup', async function(req, res) {
    // Implement user signup logic
    const user = req.body.username;
    const pass = req.body.password;

    const hasUser = await User.findOne({username: user});

    if(hasUser)
    {
        res.json({message: "User already Exists!"});
        return;
    }

    await User.create({
        username: user,
        password: pass
    });

    res.json({message: "User created successfully"});
});

// here user doesn't need to be signed in, same as we can see available courses on udemy without logIn
router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const couresList = await Course.find();

    res.json({courses: couresList});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const user = await User.find({username});

    // more to do: prevent to buy same course multiple times
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    }); 

    res.json({message: 'Course purchased successfully'});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const userData = await User.findOne({username});
    console.log(userData.purchasedCourses);

    // it contain array of objects that has id of user perchased courses
    const purchasedCourses = await Course.find({
        _id: {
            $in: userData.purchasedCourses  // it is array of id's of purchased courses
        }
    }) 

    const userCourses = [];
    for(obj of purchasedCourses)
        userCourses.push(obj.title);

    res.json({perchasedCourses: userCourses});
});

module.exports = router