

const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const authMiddleware = async (req, res, next)=>{

    try {
        let token;
        const authHeader = req.headers.authorization;
        
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
            // console.log("Token found:", token); // Debug log
        }

        if (!token) {
            console.log("No token provided");
            return res.status(401).json({ message: 'Not authorized, no token' });
        }

    
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log('Decoded Token:', decoded);

        
        const user = await User.findById(decoded.id).select('-password');
        // console.log("Found user:", user); // Debug log

        if (!user) {
            console.log("User not found for ID:", decoded.id);
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        console.log("User attached to request:", req.user.email); // Debug log
        next();

    } catch (error) {
        console.error(error);
        res.status(401).json({msg: "Invalid token"});
    }

};

module.exports = authMiddleware;



