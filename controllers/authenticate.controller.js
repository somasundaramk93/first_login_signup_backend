const User = require("../models/autenticate.model");

const signup=async (req, res) => {
  try {
    await connectDB();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.create({
      name,
      email,
      password   // (later bcrypt add pannalam)
    });

    res.status(201).json({
      message: "Signup success",
      user
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Signup failed",
      error: err.message
    });
  }
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
 