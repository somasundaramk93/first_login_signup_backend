const express=require('express');
const { signup, login } = require('../controllers/authenticate.controller');
const route=express.Router();
route.get('/',(req,res)=>{
    res.json({message:"success"})
})

//signup route
route.post('/signup',signup)

//login route
route.post('/login',login)

module.exports=route;