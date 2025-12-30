const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_DB);
  isConnected = true;
  console.log("MongoDB connected");
}

connectDB();

module.exports = mongoose;
