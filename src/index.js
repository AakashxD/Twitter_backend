const express =require('express')
const connect=require('./config/database')
const app = express();
const HashtagRepositor=require('./repository/hastag-repo')

app.listen(3000, async () => {
  connect();
  console.log("mongoDB connected");
  console.log("server started at port");
  // mongo DB connection established
  const repo=new HashtagRepositor();
  const response=await repo.getByName(['isomnos','culture','didgy']);
  console.log(response);
  response=response.map(tags=> tags.title);
  console.log(response);
});
