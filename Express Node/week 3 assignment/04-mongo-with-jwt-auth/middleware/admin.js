// we need to require jwt
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
    // jwt method save a database call!
    const token = req.headers.authorization;

    // we need to seperate the Bearer and original token value: ['Bearer', "askd.."]
    const words = token.split(" ");
    const jwtToken = words[1];
    
    // decoded contain object that we signed
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        next();
        
    } catch (error) {
        res.status(403).json({
            msg: "You are not authenticated !"
        });
    }
}

module.exports = adminMiddleware;