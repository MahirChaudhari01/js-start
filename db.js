import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// heheconst mongoUrl1 = 'mongodb://localhost:27017/'
// const mongoUrl1="mongodb+srv://mahir992535:Saag%409925@cluster0.dfecqlc.mongodb.net/hehe"
const mongoUrl1 = process.env.MONGO;

console.log(mongoUrl1);


mongoose.connect(mongoUrl1)

const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to server of mongodb");

})

db.on("disconnected", () => {
    console.log("disconnected to server of mongodb");

})

db.on("error", () => {
    console.log("error to server of mongodb");

})


export default db;