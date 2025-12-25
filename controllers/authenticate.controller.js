const userModel = require("../models/autenticate.model");
const signup=async(req,res)=>{
    const {name,email,password}=req.body;
        // check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
    
      return res.json({ error: "Email already registered" });
    }

         let user=await userModel.create({name,email,password})
        res.json({message:"register succcessfully"});

    
}
const login=async(req,res)=>{
    const {email,password}=req.body;
  let user=await userModel.findOne({email:email});
  console.log(user);
  if(user){
        if(user.password==password)
        {
            res.json({message:"login success"})
        }
        else{
            res.json({message:"password incroorect"})
        }
  }
  else{
    res.json({message:"user not found"})
  }
    res.json('login');
}

module.exports={signup,login}
 