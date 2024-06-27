import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});
const Hashtag = mongoose.model("hashtag", hashtagSchema);
export default Hashtag;
