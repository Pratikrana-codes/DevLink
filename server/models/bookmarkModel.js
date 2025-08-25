

const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" , 
        required: true
    },
    title:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    tags: [String],
    isPublic:{
        type:Boolean,
        default:false,
    },

    
},{
  timestamps: true,
})

const Bookmark = new mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;