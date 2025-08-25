
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const home = async (req,res)=>{
    try {
        res
        .status(200)
        .send("Home page");

    } catch (error) {
        console.error(error);
    }
}

const register = async(req,res)=>{
    try {
        const {username, email, password} = req.body;

        const userExist =await User.findOne({email : email});

        if(userExist){
            return res.status(400).json({msg : "User already exist"});
        }

        const userCreated = await User.create({
            username,
            email,
            password,
        });

        res.status(201).json({
            msg: "Registration successful",
            token: await userCreated.generateToken(),
            id : userCreated._id.toString(),
            });
    
    } catch (error) {
        res
        .status(400)
        .json({msg: error});
    }
}

const login = async(req,res) =>{
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({error : "Invalid email or password"});
        }

        // compare password
        const user = await bcrypt.compare(password, userExist.password);

        if(!user){
            return res.status(400).json({error: "Invalid email or password"});
        }
    
        if(user){
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
        })
        }

    } catch (error) {
        res.status(400).send({msg: "Server error"});
    }
}


const user = async(req,res) =>{
    const userId = req.user._id;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ username: user.username });
        
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }

}


module.exports = {home , register, login, user};