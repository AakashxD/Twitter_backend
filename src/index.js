import express from 'express';
import {connect} from './config/database.js'

const app = express();
app.use(express.json());

app.listen(3000, async () => {
  try {
    await connect();
    console.log("Server started at port 3000");
  } catch (e) {
    console.log(e);
  }
});
