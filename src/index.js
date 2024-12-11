const express = require('express');
const connect = require('./config/database');
const {HashtagRepository} = require('./repository/index');
const {TweetRepository} = require('./repository/index'); 
const  TweetServices =require('./services/tweet.services')

const app = express();
app.use(express.json()); 

app.listen(3000, async () => {
    try {
        await connect();
        console.log("MongoDB connected");
        console.log("Server started at port 3000");
        let service=new TweetServices();
        const tweet=await service.create({content: 'i heelo cricket #ROHITSHARMA #GOAT'});
        console.log("hello");
        console.log(tweet);
    
     
}
catch(e){
    console.log(e);
}
}
);
