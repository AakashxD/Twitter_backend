import mongoose from 'mongoose'

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        require:true,
        max:[250,'tweet cant be more than 250 character']
    },
    hashtags:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Hashtag',
    }
},{timestamps:true});
// you can add when it created nd when is updated 



const Tweet = mongoose.model("tweet", tweetSchema);
export default Tweet;
