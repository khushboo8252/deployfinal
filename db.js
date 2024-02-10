const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connection = mongoose.connect(process.env.mongoURL,{
    userNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Connected to MongoDB');
});

module.exports={
    connection
}