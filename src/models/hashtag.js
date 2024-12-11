import mongoose from 'mongoose'

const hashtagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    { // for storing id
      type: mongoose.Schema.Types.ObjectId,
      ref:'Tweet'
    },
  ],
},{timestamps:true});
const Hashtag = mongoose.model("hashtag", hashtagSchema);

export default Hashtag;
