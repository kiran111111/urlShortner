const mongoose = require("mongoose");
// const db = process.env.MONGODB_URI;
const db = "mongodb+srv://kiran:kiran@cluster0-zrsby.mongodb.net/test";

const connectDB = async ()=>{
  try{
   await mongoose.connect(db,{
     useNewUrlParser:true,
     useUnifiedTopology:true
   })

   console.log("MongoDB connected")
  }
  catch(err){
    console.log(err.message);
    process.exit(1)
  }
}

module.exports = connectDB;