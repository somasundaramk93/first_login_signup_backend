const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_DB)
.then(()=>console.log("connected"))
.catch(()=>console.log("eroor"))