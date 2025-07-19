import express from 'express'
const app = express();
import db from "./db.js";
import userCreated from './routes/user.route.js';
import dotenv from "dotenv";
dotenv.config();

const port = process.env.port || 3000 ;

app.listen(3000,()=>{
  console.log("surver is responing");
  
});

app.use(express.json())
app.use(userCreated);




