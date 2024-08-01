const express =require('express')
const connect=require('./config/database')
const app = express();

app.listen(3000, async () => {
  connect();
  console.log("mongoDB connected");
  console.log("server started at port no. 3000");
  // mongo DB connection established
  

});
