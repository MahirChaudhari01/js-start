import express from 'express'
const app = express();
import db from "./db.js";
import userCreated from './routes/user.route.js'


app.listen(3000,()=>{
  console.log("surver is responing");
  
});

app.use(express.json())

app.use(userCreated);

app.get('/lihoda',(req,res)=> res.send("welcom to my village!")

)
app.get("/{*any}/:name/:age",async(req,res)=>{
    const {name,age} = req.params;

    
    if(!name || name === ""){
      res.status(400).send({message:"All fields are required!!"})
    }
      
    res.status(200).json({message:"From",name,age});
})

