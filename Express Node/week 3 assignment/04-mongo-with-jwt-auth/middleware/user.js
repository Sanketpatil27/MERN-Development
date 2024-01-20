// we need to require jwt
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    // jwt method save a database call!
    const token = req.headers.authorization;

    // we need to split the Bearer and actual token value: ['Bearer', "askd.."]
    const words = token.split(" ");
    const jwtToken = words[1];
    
    try {
        // decoded contain object that we signed, so we can retrive username from that and set in req for further use
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        req.username = decodedValue.username;   // setting username for further requests
        next();
    } 
    catch (error) {
        res.status(403).json({
            msg: "You are no authenticated !"
        });        
    }
}

module.exports = userMiddleware;