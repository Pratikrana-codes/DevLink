
// const User = require('../models/userModel');

// Crud operations for bookmarks

const Bookmark = require('../models/bookmarkModel');



// Creating a bookmark and linking with logged-in user

const createBookmark = async(req,res)=>{

    try {
        const {title, url, description, tags, isPublic} = req.body;

        const userId = req.user._id;

        const bookmarkCreated = await Bookmark.create({
            userId, // linking bookmark with the logged-in user
            url,
            title,
            description,
            tags,
            isPublic,
        });

        res.status(201).json({
            msg: "Bookmark created successfully",
            bookmark : bookmarkCreated,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
}



// getting the bookmark associated with one user 


const getBookmark = async (req,res)=>{

    const userId = req.user._id;
    
    try {
        
        const bookmarks = await Bookmark.find({userId});

        res.status(200).json({bookmarks});

    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Server error"});
    }
}


// deleting a bookmark from various associated with one user

const removeBookmark = async(req,res)=>{
    try {
        const {id} = req.params;

        const deleted = await Bookmark.findOneAndDelete({
            _id: id,
            userId: req.user._id,
        })

        if(!deleted){
            return res.status(404).json({msg: "Bookmark not found or not yours"});
        }

        res.status(200).json({msg: "Bookmark deleted successfully"});

    } catch (error) {

        console.error(error);
        res.status(500).json({msg:"Server error"});
        
    }

}


// updating a bookmark

const updateBookmark = async(req,res)=>{

    
    try {
        const {id} = req.params;
        
        const updates = req.body;

        const updated = await Bookmark.findOneAndUpdate(
            {_id: id, userId : req.user._id}, // ownerShip check
            updates, // fields to update
            {new:true} // return updated doc instead of old
        );

        if(!updated){
            return res.status(404).json({msg: "Bookmark not found or not yours"});
        }


        res.status(200).json({updated});

    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Server error"});
    }

}


module.exports = {createBookmark, getBookmark, removeBookmark, updateBookmark};