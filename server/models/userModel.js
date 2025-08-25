

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{ timestamps:true});


// securing the password with bcryptjs

userSchema.pre('save',async function(next){
    const user = this;

    if(!user.isModified('password')){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, saltRound);
        next();
    } catch (error) {
        next(error);
    }
});



// json web token
// Tokens, such as jwts are typically not stored in the database along with other
//  user details. Instead, they are issued by the server during 
// the authentication process and then stored on the client-side for later use.

userSchema.methods.generateToken = async function(){

    try {
        return jwt.sign({
            id: this._id.toString(), // payload
            email: this.email,
        },
        process.env.JWT_SECRET_KEY, // secret key
        {
            expiresIn: '1h' // token validity
        }
    );
    } catch (error) {
        console.error(error);
    }
};

const User =new mongoose.model("User", userSchema);

module.exports = User;