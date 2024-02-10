const express = require('express');
const {connection}= require('./db')
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');

const app = express();
const port = process.env.port;
app.use(cors());

app.use(express.json());
app.use('/users',authRoutes);
app.use('/users',userRoutes);
app.use('/posts',postRoutes);


app.get("/",(req,res)=>{
    res.send("home page")
})


app.listen(port,async()=>{
    try {
     await connection
     console.log(`server is running on port ${port} and db is connected`)
    } catch (error) {
     console.log(error)
    }
 })