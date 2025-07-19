import {person} from "../models/person.js";

export const createUSer = async(req,res)=>{
    const {name,email,age,work,mobile}=req.body;
    const p = await person.create({
      name,
      email,
      age,
      work,
      mobile
    })
    if(p){
      console.log(p);
      
      res.status(200).send({msg:"your profile is succesfully created",p})
    }

   res.status(400).send({msg:"Error creating profile"})
    
}

export const tom = (req,res)=> res.send("welcom to my page hoe can i help you!")

export const giveDetailes = async (req,res)=>{
  const{email}=req.body;
  const e = await person.find({email})
  console.log(typeof(e));
  console.log(e);
  
  if(e){
    res.status(200).json({name:e[0].name});
  }else{
    res.status(400).json("data not found");
  }

}

export const updateEmail = async (req,res)=>{
  const {email} = req.body;
  const e2 = await person.find({email});
  if(e2){
    const final = await person.updateMany({email},{$set:{work:"student"}})
    if(final){
      res.status(200).send({});
    }
  }else{
    res.status(404).send("ther is error");
  }
}