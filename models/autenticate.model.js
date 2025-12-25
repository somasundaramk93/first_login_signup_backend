const mongoose=require('mongoose');

//schema creation
const userSchema=mongoose.Schema({
name:String,
email:String,
password:String
})

//model creation
const userModel=mongoose.model('user',userSchema);
module.exports = userModel;