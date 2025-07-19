import mongoose from "mongoose";
const mongoURL = 'mongodb://localhost:27017/hehe'
 
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to server of mongodb");
    
})

db.on("disconnected",()=>{
    console.log("disconnected to server of mongodb");
    
})

db.on("error",()=>{
    console.log("error to server of mongodb");
    
})


export default db;