const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');


const register = async (req,res)=>{
    try {
        const {name,email,gender,password}= req.body;
        let user = await User.findOne({email});

        if(user) return res.status(400).json({message:'User already exists'});

        user = new User({
            name,
            email,
            gender,
            password:await bcrypt.hash(password,10)
        });
        await user.save();
        res.status(201).json({message:'User registered successfully'})
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
};

const login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message:'Invalid email or password'});

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(400).json({message:'Invalid email or password'});

        const token = jwt.sign({userId:user._id},'masai');
        res.json({token});
    } catch (error) {
        res.status(500).json({message:'Server Error'});
    }
};

module.exports = {
    register, login
};