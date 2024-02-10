const Post = require('../models/postModels');
const User = require('../models/userModels');


const addPost = async (req,res)=>{
    try {
        const {title,body,device}=req.body;
        const user = await User.findById(req.user.userId);

        const post = new Post({
            title,
            body,
            device,
            user:req.user.userId
        });

        await post.save();
        user.posts.push(post._id);
        await user.save();

        res.status(201).json({message:'Post created successfully'});
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
};

const updatePost = async (req,res)=>{
    try {
        const {postId} = req.params;
        const {title, body, device} = req.body;

        const post = await Post.findById(postId);
        if(!post) return res.status(404).json({message:'Post not found'});

        post.title = title;
        post.body = body;
        post.device = device;

        await post.save();
        res.json({message:'Post updated successfully'})
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
};

const deletePost = async (re,res)=>{
    try {
        const {postId} = req.params;

        await Post.findByIdAndDelete(postId);
        res.json({message:'Post deleted successfully'});
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
};

module.exports={
    addPost,updatePost,deletePost
};