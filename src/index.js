import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repo.js";
const app = express();

app.listen(3000, async () => {
  console.log("server started at port no. 3000");
  // mongo DB connection established
  connect();
  console.log("mongoDB connected");

  // create a document
  Tweet.create({
    content: "this is my tweet 3",
    likes: 252,
    noOfRetweets: 15,
    Comment: "whatsayy biyaaach",
  });
  Hashtag.create({
    text: "World Cup Throphy",
    tweets:['66756c4c9f446b79ce51b126'],
  });
    
  const tweetRepo=new TweetRepository();
  let tweet=await tweetRepo.getAllTweets();
  console.log(tweet)

});
