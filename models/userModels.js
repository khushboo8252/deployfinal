const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    gender:{type:String,
            enum:['Male','Female','Other']
    },
    posts:[{type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
    }]
},{
    versionKey:false

});

module.exports=mongoose.model('User',userSchema);