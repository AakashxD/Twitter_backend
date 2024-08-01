const mongoose=require('mongoose')
const connect = async ()=>{
   await  mongoose.connect('mongodb+srv://axkashsingh:aakashsingh@cluster0.vo9xhvj.mongodb.net/Twitterbackend');
 }

 module.exports=connect
