import Tweet from "../models/tweet.js";
class TweetRepository{
    async create(data){
      try {
        let tweet= await Tweet.create(data);

      } catch (error) {
        console.log(error);
      }
    }
    async getAllTweets(){
        try {
            let tweets=await Tweet.find({});
            return tweets;
        } catch (error) {
            console.log(error);
        }

    }
    async getTweet(id){
        try {
            let tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }
    async deleteTweet(id){
        try {
            let tweet=await Tweet.deleteOne(id)
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }

    }
    export default TweetRepository
