const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI
const connect = async ()=>{
  try {
    await  mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log(error);
  }
 }
 module.exports=connect
