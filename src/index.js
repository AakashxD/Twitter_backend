const express =require('express')
const connect=require('./config/database')
const app = express();

app.listen(3000, async () => {
  connect();
  console.log("mongoDB connected");
  console.log("server started at port");
  // mongo DB connection established
  

});
