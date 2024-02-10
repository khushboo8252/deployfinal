const express = require('express');
const router = express.Router();
const {getUserPosts} = require('../controllers/userController');
const auth = require('../middleware/authmiddileware');

router.get('/posts',auth,getUserPosts);

module.exports = router;