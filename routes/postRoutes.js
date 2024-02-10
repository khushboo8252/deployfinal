const express = require('express');
const router = express.Router();
const {addPost,updatePost,deletePost} = require('../controllers/postController');
const auth = require('../middleware/authmiddileware');
const { route } = require('./authRoutes');


router.post('/add',auth,addPost);
router.put('/update/:postId',auth,updatePost);
router.delete('/delete/:postId',auth,deletePost);


module.exports=router;