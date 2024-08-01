const mongoose =require('mongoose');

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        require:true 
    },
    userEmail:{
        type:String,
    }
    ,

},{timestamps:true});


const comment=mongoose.model('comment',commentSchema);

module.exports=comment;