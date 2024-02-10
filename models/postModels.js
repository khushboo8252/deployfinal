const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    devices:{
    type:String,
    enum:['PC','TABLET','MOBILE'],
    required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
     versionKey:false
    
});

module.exports = mongoose.model('Post',postSchema)