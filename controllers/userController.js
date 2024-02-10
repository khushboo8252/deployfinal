const User = require('../models/userModels');

const getUserPosts = async (req,res)=>{
    try {
        const user = await User.findById(req.user.userId).populate('posts');
        res.json(user.posts);
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
}

module.exports={
    getUserPosts
};